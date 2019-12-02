import {sampleArray, interval} from "./lib/test-sources";
import {emitWithInterval} from "./custom-function";

export const output$ = emitWithInterval(sampleArray, interval);

output$.subscribe(output => {
  console.log(output);
});