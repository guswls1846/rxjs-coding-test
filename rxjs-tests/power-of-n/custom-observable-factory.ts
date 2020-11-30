import { Observable, interval, from, of } from "rxjs";
import { map, concatMap, takeWhile } from "rxjs/operators";

export function output$(input: number[]): Observable<number> {
  // TODO
  const squareRoot = (val) => interval(1000).pipe(map((i) => Math.pow(val, i + 1)));
  const source = from(input).pipe(concatMap((val) => (val !== 1 ? squareRoot(val).pipe(takeWhile((val) => val < 5000)) : of(val))));
  return source;
}
