import { output$ } from "./custom-observable";

output$.subscribe({
  next: (val) => console.log(`match sequence appears in target sequence ${val} times`),
});
