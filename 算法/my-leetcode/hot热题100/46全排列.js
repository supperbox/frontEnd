var permute = function (nums) {
  if (nums.length === 1) {
    return [nums];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let copy = [...nums];
    let head = copy.splice(i, 1)[0];
    let temp = permute(copy);
    let index = temp.map((item) => {
      item.unshift(head);
      return item;
    });
    res = [...res, ...index];
  }
  return res;
};

let permute2 = (arr) => {
  let res = [];
  let len = arr.length;
  function dfs(temp, arr) {
    if (temp.length === len) {
      res.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        let index = [...arr];
        index.splice(i, 1);
        dfs(temp, index);
        temp.pop();
      }
    }
  }
  dfs([], arr);
  return res;
};

let permute3 = (arr) => {
  if (arr.length === 1) {
    return [arr];
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr.slice();
    let head = index.splice(i, 1)[0];
    let temp = permute3(index).map((item) => {
      item.unshift(head);
      return item;
    });
    res = res.concat(temp);
  }
  return res;
};

console.log(permute3([1, 2, 3]));
