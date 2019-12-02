import { source1, distance } from "./lib/test-source";
import { filterClosePoints } from "./custom-operator";

source1.pipe(
  filterClosePoints(distance)
).subscribe(result => {
  console.log(result);
});