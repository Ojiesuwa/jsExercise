let start = Date.now();
let timeOutId;

const log = (...input) => {
  console.log(Date.now() - start, input);
};

const debounce = (logger, t) => {
  return (input) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => logger(input), t);
  };
};

const dlog = debounce(log, 150);

setTimeout(() => dlog([1, 2]), 50);
setTimeout(() => dlog([3, 4]), 300);
setTimeout(() => dlog([5, 6]), 300);
