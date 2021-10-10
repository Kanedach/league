import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mapTo, tap } from 'rxjs/operators';

export interface MockResponsePerUrl {
  urlRegExp: RegExp;
  body?: any;
  computedBody?: (request: HttpRequest<any>) => any;
  status?: number;
  computedStatus?: (request: HttpRequest<any>) => number;
  statusText?: string;
  headers?: HttpHeaders;
  delayInMilliSeconds_DO_NOT_COMMIT?: number; // Do NOT commit this! This is for debugging-purposes. Any delay will increase runtime of e2e-specs!
  callbackOnIntercept?: () => void;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export class MockedDataInterceptor implements HttpInterceptor {
  constructor(protected baseUrlRegExp: RegExp, private mockResponsesPerUrl: MockResponsePerUrl[]) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.baseUrlRegExp.test(req.url)) {
      return next.handle(req);
    }

    const matchingResponses = this.mockResponsesPerUrl.filter((m) => m.urlRegExp.test(req.url) && (!m.method || m.method === req.method));
    if (matchingResponses.length > 0) {
      // Just return the first matching response
      const matchingResponse = matchingResponses[0];
      if (matchingResponse.callbackOnIntercept) {
        matchingResponse.callbackOnIntercept();
      }
      const requestDelayInMilliSeconds = this.getDelay(matchingResponse);
      return of(null)
        .pipe(
          tap(() => this.startDelayLog(matchingResponse, requestDelayInMilliSeconds)),
          delay(requestDelayInMilliSeconds),
          tap(() => this.endDelayLog(matchingResponse, requestDelayInMilliSeconds))
        )
        .pipe(
          mapTo(
            new HttpResponse({
              body: matchingResponse.body || (matchingResponse.computedBody ? matchingResponse.computedBody(req) : null),
              headers: matchingResponse.headers ? matchingResponse.headers : new HttpHeaders(),
              status: matchingResponse.status || (matchingResponse.computedStatus ? matchingResponse.computedStatus(req) : 200),
              statusText: matchingResponse.statusText ? matchingResponse.statusText : 'OK',
              url: req.url,
            })
          )
        );
    }
    return next.handle(req);
  }

  private startDelayLog(matchingResponse: MockResponsePerUrl, delayInMs: number): void {
    if (delayInMs && delayInMs > 0) {
      console.log(`Delaying interception on [${this.baseUrlRegExp}, ${matchingResponse.urlRegExp}] for: ${delayInMs}ms`);
    }
  }
  private endDelayLog(matchingResponse: MockResponsePerUrl, delayInMs: number): void {
    if (delayInMs && delayInMs > 0) {
      console.log(`Delaying interception on [${this.baseUrlRegExp}, ${matchingResponse.urlRegExp}] ended!`);
    }
  }

  private generateRandomDelay(maxDelay: number, minDelay: number): number {
    return Math.floor(Math.random() * (maxDelay - minDelay) + minDelay);
  }

  private getDelay(matchingResponse: MockResponsePerUrl): number {
    return matchingResponse.delayInMilliSeconds_DO_NOT_COMMIT ? 0 : 0;
  }
}
