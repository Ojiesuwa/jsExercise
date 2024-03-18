let start = Date.now();
let timeOutId;
let output = [];
let display = false;

// logging function to show time of log
const log = (input) => {
  output.push({ t: Date.now() - start, input });
};

// Debounce function declaration
const debounce = (logger, t) => {
  return (input) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      logger(input);
      display && console.log(output);
    }, t);
  };
};

const dlog = debounce(log, 150);

const test = (testData) => {
  testData.forEach((data, index) => {
    const { t, inputs } = data;
    setTimeout(() => {
      dlog(inputs);
      display = index === testData.length - 1 ? true : false;
    }, t);
  });
};

calls = [
  { t: 50, inputs: [1, 2] },
  { t: 300, inputs: [3, 4] },
  { t: 300, inputs: [5, 6] },
];

test(calls);
