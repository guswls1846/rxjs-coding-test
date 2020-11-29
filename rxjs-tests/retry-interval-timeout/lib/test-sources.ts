import { Observable } from "rxjs";

export function getRandomNumber(): Observable<number> {
  console.log("getRandomNumber invoked!!");
  return new Observable<number>((observer) => {
    let number = Math.random();
    console.log("Observable.create!!", number);
    if (number > 0.8) {
      observer.next(number);
      observer.complete();
    } else {
      observer.error(new Error("The number is not big enough"));
    }
  });
}

export const interval = 300;
export const timeout = 2000;
