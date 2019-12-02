# Retry interval timeout

## Goal
- Create a function that returns an UnaryFunction that retries a given task at fixed intervals for a given amount of time.
- If a given task outputs an error until the end, it should be able to pass the error out.
- (!important) Emit once! one result or one error
## Test
`$npm run rxjs/retry-interval-timeout`

