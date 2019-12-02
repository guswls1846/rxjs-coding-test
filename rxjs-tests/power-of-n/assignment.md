# 

## Goal
- Create a custom observable factory which receives an input number array and calculates every 'power of `n`' until when it is smaller than 5000, with interval 1s. If `1` is given, just emit `1`. If number is 0 or negative, ignore it (no calculation)
- Order should be preserved. For detailed explanation, check *Example* section
- Do not use any global variable, solve it with only operators

## Example
Input array: `[1, 3, 5, 1, 2, 0]`

Code: `output$(input).subscribe(console.log)`

Result:
```javascript
// each emit has interval of 1s
1
3
9
27
81
243
729
2187
5
25
125
625
3125
1
2
4
8
16
32
64
128
256
512
1024
2048
4096
// complete

/*
 * [1, 3, 5, 1, 2, 0]
 * 
 * Order of '1, 3, 5, 1, 2, 0' preserved, which means 'power-of-n' of 3 cannot be emitted before 'power-of-n' of 1
 * 
 * 1 -> 1
 * 3 -> 3, 3^2, 3^3, 3^4, 3^5, 3^6, 3^7 < 5000 
 * 5 -> 5, 5^2, 5^3, 5^4, 5^5 < 5000
 * 1 -> 1
 * 2 -> 2, 2^2, 2^3, 2^4, 2^5, 2^6, 2^7, 2^8, 2^9, 2^10, 2^11, 2^12 < 5000
 * 0 -> ignored
```

## Test
`$npm run rxjs/power-of-n`
