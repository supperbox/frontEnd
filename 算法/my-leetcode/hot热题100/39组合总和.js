var combinationSum = function (arr, tar) {
  let res = [];

  function recur(start, temp, tar) {
    for (let i = start; i < arr.length; i++) {
      let index = JSON.parse(JSON.stringify(temp));
      if (tar >= arr[i]) {
        index.push(arr[i]);

        if (tar === arr[i]) {
          res.push(index);
        } else {
          recur(i, index, tar - arr[i]);
        }
      }
    }
  }

  recur(0, [], tar);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
