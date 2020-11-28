import { Observable, from } from "rxjs";
import { sequenceEqual, switchMap } from "rxjs/operators";
import { target$, matchSequence } from "./lib/test-source";

/**
 * Do not change signature of the observable.
 * Do not add any global variable.
 */

export const output$: Observable<number> = target$.pipe(sequenceEqual(matchSequence));
