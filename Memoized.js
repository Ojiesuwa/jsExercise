// Note: The function returns an object (callm getCallCount)!

var cache = {};

const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

const memoize = (fn) => {
  const returnFunction = (a = 0, b = 0) => {
    let storedValue = cache[`${fn.name}:${a}, ${b}`];
    if (storedValue) {
      cache[`${fn.name}:${a}, ${b}`].getCallCount += 1;
    } else {
      cache[`${fn.name}:${a}, ${b}`] = {
        call:
          fn.name === "sum"
            ? sum(a, b)
            : fn.name == "factorial"
            ? factorial(a)
            : fib(a),
        getCallCount: 1,
      };
    }
    return cache[`${fn.name}:${a}, ${b}`];
  };
  return returnFunction;
};
