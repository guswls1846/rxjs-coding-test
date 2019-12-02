import { UnaryFunction, pipe, Observable } from "rxjs";

// Do not change signature of the function
export function retryIntervalTimeout(interval: number, _timeout: number): UnaryFunction<Observable<number>, Observable<number>> {
  return pipe(/*TODO*/);
}

