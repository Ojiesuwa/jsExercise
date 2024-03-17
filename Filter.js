const filter = function (arr, cb) {
  var output = [];
  arr.forEach((element, index) => {
    if (cb(element, index)) {
      output.push(element);
    }
  });
  return output;
};

let test = [-2, -1, 0, 1, 2];
let result = filter(test, (n, i) => n + 1);
