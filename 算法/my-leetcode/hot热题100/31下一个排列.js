function nextArr(arr) {
  let max = Number.MIN_VALUE;
  let changeFlag = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < max) {
      changeFlag = i;
      break;
    } else {
      max = Math.max(max, arr[i]);
    }
  }

  if (changeFlag >= 0) {
    let min = Number.MAX_VALUE;
    arr.slice(changeFlag).forEach((item) => {
      if (item > arr[changeFlag]) {
        min = Math.min(min, item);
      }
    });
    let index = arr.slice(changeFlag).findIndex((item) => item === min);
    let temp = arr[changeFlag];
    arr[changeFlag] = arr[index + changeFlag];
    arr[index + changeFlag] = temp;
    return [
      ...arr.slice(0, changeFlag + 1),
      ...arr.slice(changeFlag + 1).sort(),
    ];
  } else {
    return arr.reverse();
  }
}

// console.log(nextArr([1, 3, 2]));

function nextArr2(arr) {
  let i = arr.length - 1;
  let max = arr[i];
  while (i >= 0) {
    if (arr[i] >= max) {
      max = arr[i];
      arr.push(arr.splice(i, 1)[0]);
    } else {
      let index = arr.slice(i).findIndex((item) => item > arr[i]);
      let temp = arr[i];
      arr[i] = arr[index + i];
      arr[index + i] = temp;
      break;
    }
    i--;
  }
  return arr;
}

// console.log(nextArr2([1, 3, 2]));

function times(str) {
  let arr = str.split("");
  let flag = 0;
  let same = arr[0];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== same) {
      res += i - flag > 1 ? Math.floor((i - flag) / 2) : 0;
      same = arr[i];
      flag = i;
    }
    if (i === arr.length - 1) {
      res += i - flag > 1 ? Math.floor((i - flag + 1) / 2) : 0;
    }
  }
  return res;
}

console.log(times("111222333445"));
