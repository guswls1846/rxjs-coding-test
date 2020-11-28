import { Observable, from, of } from "rxjs";
import { take, concatMap, delay } from "rxjs/operators";
// Do not change signature of the function

export function emitWithInterval(source: number[], interval: number): Observable<number> {
  // TODD
  return from(source).pipe(concatMap((val) => of(val).pipe(delay(interval))));
}
