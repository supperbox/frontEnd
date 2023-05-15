var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

var dailyTemperatures2 = function (arr) {
  let res = new Array(arr.length).fill(0);
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    stack.length && (res[i] = stack[stack.length - 1] - i);

    stack.push(i);
  }

  return res;
};

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]));
