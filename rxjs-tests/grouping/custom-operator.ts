import { pipe, UnaryFunction, Observable } from "rxjs";
import { filter, groupBy, mergeMap, toArray, map, tap } from "rxjs/operators";
export function sortByTitle(gender: string): UnaryFunction<Observable<any>, Observable<string[]>> {
  return pipe(
    // TODO
    filter((data) => data.gender === gender),
    groupBy((person) => person.title),
    mergeMap((group) =>
      group.pipe(
        map((data) => data.name),
        toArray()
      )
    )
  );
}
