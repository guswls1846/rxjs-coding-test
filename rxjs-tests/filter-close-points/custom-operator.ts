import { pipe, Observable, UnaryFunction } from "rxjs";
import { Point } from "./lib/test-source";
import { map, filter } from "rxjs/operators";

export function filterClosePoints(distance: number): UnaryFunction<Observable<Point>, Observable<Point>> {
  return pipe();
  // TODO
}
