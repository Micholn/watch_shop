# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Looking through the code snippet I realized there were so many `if` checks, and I knew I had to find the source of the evaluation of the checks with is the `candidate` variable, and I needed to eliminate unnecessary checks by reducing it from five checks to two major checks.

The first `if` statement ensures that the `candidate` variable has a value;
```js
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }
```
This eliminates every `if/else` statements that checks if the `candidate` variable has a value.
For example in line 17 of the original implementation;
```js 
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
```

While the second `if/else` statement ensures that the value of the `candidate` variable meets the required datatype while also removing unnecessary `if/else` statements.

### Why is it readable?
By eliminating nested `if` checks and making use of two major `if` statements.

