import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class RiotInterceptor implements NestInterceptor {
  private authToken = environment.riot_api_token;

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(tap((req) => console.log(req)));
  }
}
