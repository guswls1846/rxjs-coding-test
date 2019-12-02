import { from, of } from "rxjs";
import { concatMap, delay, timeout } from "rxjs/operators";

export interface Point {
  id: string,
  x: number,
  y: number
}

const points1: Point[] = [
  { id: '0', x: 1, y: 1 }, { id: '1', x: 1, y: 2 }, { id: '2', x: 1, y: 2 }, { id: '3', x: 1, y: 3 }, { id: '4', x: 3, y: 3 },
  { id: '5', x: 3, y: 4 }, { id: '6', x: 4, y: 5 }, { id: '7', x: 4, y: 5 }, { id: '8', x: 5, y: 6 }, { id: '9', x: 5, y: 7 },
  { id: '10', x: 6, y: 7 }, { id: '11', x: 6, y: 7 }, { id: '12', x: 7, y: 7 }, { id: '13', x: 8, y: 7 }, { id: '14', x: 8, y: 7 },
  { id: '15', x: 9, y: 8 }, { id: '16', x: 9, y: 9 }, { id: '17', x: 9, y: 8 }, { id: '18', x: 9, y: 7 }, { id: '19', x: 8, y: 7 },
  { id: '20', x: 7, y: 7 }, { id: '21', x: 6, y: 7 }, { id: '22', x: 5, y: 7 }, { id: '23', x: 5, y: 6 }, { id: '24', x: 5, y: 5 },
  { id: '25', x: 4, y: 4 }, { id: '26', x: 1, y: 1 }, { id: '27', x: 1, y: 1 }, { id: '28', x: 1, y: 1 }, { id: '29', x: 1, y: 1 }
];
export const distance = 1.1;
export const source1 = from(points1).pipe(
  concatMap((point: Point) => of(point).pipe(delay(1000)))
);