import { getRandomNumber, interval, timeout } from "./lib/test-sources";
import { retryIntervalTimeout } from "./custom-operator";

const startTime = Date.now();
export const output$ = getRandomNumber().pipe(retryIntervalTimeout(interval, timeout));

// Caution: success or error should be emitted once!
output$.subscribe(
  (output) => {
    console.log("@@@ success: ", output, (Date.now() - startTime) / 1000); //
  },
  (error) => {
    console.log("@@@ error: ", error.message, (Date.now() - startTime) / 1000);
  },
  () => {
    console.log("@@@ complete", (Date.now() - startTime) / 1000);
  }
);
