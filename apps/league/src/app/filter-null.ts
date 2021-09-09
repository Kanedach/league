
import {filter, map} from "rxjs/operators";
import {Observable, OperatorFunction} from "rxjs";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export function filterNull<T>(): OperatorFunction<T | null | undefined, T> {
  console.log('^');
  return (input$: Observable<T | null | undefined>): Observable<T> => {
    return input$.pipe(
      filter((e) => e !== null && e !== undefined),
      map((e) => e!)
    );
  };
}

export function arrayFilterNull<T>(array: (T | null | undefined)[]): T[] {
  return array.filter((e) => !!e).map((e) => e!);
}
