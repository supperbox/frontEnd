// const readline = require("readline");

const getResult = (arr, num) => {
  let arr1 = arr.filter((item) => item < 4);
  let arr2 = arr.filter((item) => item >= 4);
  let len1 = arr1.length;
  let len2 = arr2.length;
  let res = [];

  function sample(arr, num) {
    if (arr.length === num) {
      return arr;
    }
    if (num === 1) {
      return arr.map((item) => [item]);
    }
    if (num === 2) {
      if (arr.length === 3) {
        return [
          [arr[0], arr[1]],
          [arr[0], arr[2]],
          [arr[1], arr[2]],
        ];
      }
      if (arr.length === 4) {
        return [
          [arr[0], arr[1]],
          [arr[0], arr[2]],
          [arr[0], arr[3]],
          [arr[1], arr[2]],
          [arr[1], arr[3]],
          [arr[2], arr[3]],
        ];
      }
    }
    if (num === 3) {
      return [
        [arr[0], arr[1], arr[2]],
        [arr[0], arr[1], arr[3]],
        [arr[0], arr[2], arr[3]],
        [arr[1], arr[2], arr[3]],
      ];
    }
  }

  switch (num) {
    case 1:
      if (len1 === 1 || len2 === 1) {
        if (len1 === 1) {
          res = [...res, ...sample(arr1, 1)];
        }
        if (len2 === 1) {
          res = [...res, ...sample(arr2, 1)];
        }
        return res;
      }
      if (len1 === 3 || len2 === 3) {
        if (len1 === 3) {
          res = [...res, ...sample(arr1, 1)];
        }
        if (len2 === 3) {
          res = [...res, ...sample(arr2, 1)];
        }
        return res;
      }
      if (len1 === 2 || len2 === 2) {
        if (len1 === 2) {
          res = [...res, ...sample(arr1, 1)];
        }
        if (len2 === 2) {
          res = [...res, ...sample(arr2, 1)];
        }
        return res;
      }
      if (len1 === 4 || len2 === 4) {
        if (len1 === 4) {
          res = [...res, ...sample(arr1, 1)];
        }
        if (len2 === 4) {
          res = [...res, ...sample(arr2, 1)];
        }
        return res;
      }
      break;
    case 2:
      if (len1 === 2 || len2 === 2) {
        if (len1 === 2) {
          res = [...res, ...sample(arr1, 2)];
        }
        if (len2 === 2) {
          res = [...res, ...sample(arr2, 2)];
        }
        return res;
      }
      if (len1 === 4 || len2 === 4) {
        if (len1 === 4) {
          res = [...res, ...sample(arr1, 2)];
        }
        if (len2 === 4) {
          res = [...res, ...sample(arr2, 2)];
        }
        return res;
      }
      if (len1 === 3 || len2 === 3) {
        if (len1 === 3) {
          res = [...res, ...sample(arr1, 2)];
        }
        if (len2 === 3) {
          res = [...res, ...sample(arr2, 2)];
        }
        return res;
      }
      break;
    case 4:
      if (len1 === 4 || len2 === 4) {
        if (len1 === 4) {
          res = [...res, arr1];
        }
        if (len2 === 4) {
          res = [...res, arr2];
        }
        return res;
      }
    case 8:
      if (len1 === 4 && len2 === 4) {
        res = [...arr1, arr2];
        return res;
      }
  }
};

console.log(getResult([0, 1, 3, 4, 5, 6, 7], 2));
