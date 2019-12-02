# 

## Goal
- Given the target sequence and match sequence, create the Observable which emits the number of how many match sequence appears in target sequence. If the match sequence length is `n`, starting from the index `0` of target sequence, for every `n` part sequence of target sequence, check if it matches the match array and count the match number
- **Do not use any global variable, solve it with only operators**

## Example
Target sequence: `[0, 1, 2, 3, 4, 0, 1, 0]`

Match sequence: `[0, 1]`

Code: `output$.subscribe(console.log)`

Result:
```javascript
2
// complete

/*
 *       match sequence   every 2 segment of target sequence
 * true      [0, 1]     vs     [0, 1]
 * false     [0, 1]     vs     [1, 2]  
 * false     [0, 1]     vs     [2, 3]
 * false     [0, 1]     vs     [3, 4]
 * false     [0, 1]     vs     [4, 0]
 * true      [0, 1]     vs     [0, 1]
 * false     [0, 1]     vs     [1, 0]
 * 
 * Therefore, # of true = 2
 */
```

## Test
`$npm run rxjs/count-sequence-match`