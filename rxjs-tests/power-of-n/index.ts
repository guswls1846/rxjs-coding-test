import { output$ } from "./custom-observable-factory";
import { input } from "./lib/test-source";

output$(input).subscribe(console.log);