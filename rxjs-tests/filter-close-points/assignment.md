# Filter out close points

## Goal
- Create a function that returns an UnaryFunction that filters out points closer to the given distance from the last output point.
- You can change or add codes at 'TODO'

## Example
when `distance: 2.1`
source: {x: 1, y: 1} --> {x: 1, y: 1} --> {x: 2, y: 3} --> {x: 3, y: 3} --> {x: 4, y: 4}
output: {x: 1, y: 1} -------------------> {x: 2, y: 3} -------------------> {x: 4, y: 4}

## Test
`$npm run rxjs/filter-close-points`

