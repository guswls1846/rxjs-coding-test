import { pipe, Observable, UnaryFunction } from "rxjs";
import { Point } from "./lib/test-source";

export function filterClosePoints(distance: number): UnaryFunction<Observable<Point>, Observable<Point>> {
  return pipe(
    // TODO
  );
}