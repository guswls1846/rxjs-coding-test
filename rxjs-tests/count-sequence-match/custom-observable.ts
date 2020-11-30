import { Observable, from, of } from "rxjs";
import { sequenceEqual, switchMap, tap, toArray, map, find, mapTo, filter } from "rxjs/operators";
import { target$, matchSequence } from "./lib/test-source";

/**
 * Do not change signature of the observable.
 * Do not add any global variable.
 */
// let count = 0;
// export const output$: Observable<Number> = target$.pipe(switchMap((arr) => of(arr).pipe(sequenceEqual(from(matchSequence)))));

export const output$: Observable<Number> = target$.pipe();

//못풀었습니다. 합격 여부와 관계없이 실력향상을 위해 정답을 알려주시면 감사하겠습니다.
