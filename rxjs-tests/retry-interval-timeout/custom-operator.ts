import { UnaryFunction, pipe, Observable, interval as rxInterval, of, merge, concat, timer, throwError } from "rxjs";
import { throttleTime, concatMap, delay, map, mergeMap, switchMap, debounceTime, take, timeout, tap, timeInterval, debounce, takeUntil, retryWhen, delayWhen, retry, catchError } from "rxjs/operators";
// Do not change signature of the function
const startTime = Date.now();
export function retryIntervalTimeout(interval: number, _timeout: number): UnaryFunction<Observable<number>, Observable<number>> {
  return pipe(retryWhen((errors) => concat(errors.pipe(delay(interval), takeUntil(timer(_timeout))), concat(throwError(new Error("The number is not big enough"))))));
}
