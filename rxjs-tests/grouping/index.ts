import { source, gender } from './lib/test-source';
import { sortByTitle } from "./custom-operator";

source.pipe(
  sortByTitle(gender)
).subscribe(x => console.log(x));