import { Observable, from, of } from "rxjs";
import { sequenceEqual, switchMap, tap, toArray, map, find, mapTo, filter, bufferCount, count, concatMap } from "rxjs/operators";
import { target$, target2$, matchSequence, matchSequence2 } from "./lib/test-source";

/**
 * Do not change signature of the observable.
 * Do not add any global variable.
 */

export const output$: Observable<any> = target$.pipe(
  bufferCount(matchSequence.length, matchSequence.length - 1),
  filter((x) => {
    console.log(x.join(""));
    return x.join("") === matchSequence;
  }),
  count()
);
