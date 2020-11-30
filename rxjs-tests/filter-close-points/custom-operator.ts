import { pipe, Observable, UnaryFunction } from "rxjs";
import { Point } from "./lib/test-source";

export function filterClosePoints(distance: number): UnaryFunction<Observable<Point>, Observable<Point>> {
  return pipe();
  // TODO
}
//못풀었습니다. 합격 여부와 관계없이 실력향상을 위해 정답을 알려주시면 감사하겠습니다.
