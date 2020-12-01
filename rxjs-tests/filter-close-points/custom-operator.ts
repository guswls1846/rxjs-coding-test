import { pipe, Observable, UnaryFunction } from "rxjs";
import { Point } from "./lib/test-source";
import { distinctUntilChanged } from "rxjs/operators";

export function filterClosePoints(distance: number): UnaryFunction<Observable<Point>, Observable<Point>> {
  return pipe(
    distinctUntilChanged((prev, next) => {
      return Math.sqrt((prev.x - next.x) ** 2 + (prev.y - next.y) ** 2) < distance;
    })
  );
}
