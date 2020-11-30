import { UnaryFunction, pipe, Observable, concat, timer, throwError } from "rxjs";
import { delay, takeUntil, retryWhen } from "rxjs/operators";
// Do not change signature of the function

export function retryIntervalTimeout(interval: number, _timeout: number): UnaryFunction<Observable<number>, Observable<number>> {
  return pipe(retryWhen((errors) => concat(errors.pipe(delay(interval), takeUntil(timer(_timeout))), concat(throwError(new Error("The number is not big enough"))))));
}
