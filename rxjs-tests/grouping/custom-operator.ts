import { pipe, UnaryFunction, Observable } from "rxjs";

export function sortByTitle(gender: string): UnaryFunction<Observable<any>, Observable<string[]>> {
  return pipe(
    // TODO
  );
}