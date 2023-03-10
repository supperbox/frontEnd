/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  function singleDigit(str) {
    switch (str) {
      case "2":
        return ["a", "b", "c"];
        break;
      case "3":
        return ["d", "e", "f"];
        break;
      case "4":
        return ["g", "h", "i"];
        break;
      case "5":
        return ["j", "k", "l"];
        break;
      case "6":
        return ["m", "n", "o"];
        break;
      case "7":
        return ["p", "q", "r", "s"];
        break;
      case "8":
        return ["t", "u", "v"];
        break;
      case "9":
        return ["w", "x", "y", "z"];
        break;
    }
  }

  function handleDigits(str) {
    if (str.length === 1) {
      return singleDigit(str);
    }
    let arr = handleDigits(str.slice(0, str.length - 1));
    let temp = singleDigit(str.slice(str.length - 1));
    let res = [];
    arr.forEach((item) => {
      temp.forEach((j) => {
        res.push(item + j);
      });
    });

    return res;
  }

  return handleDigits(digits);
};

console.log(letterCombinations("23"));

// 深度优先算法
function getLetters(digits) {
  let map = {
    2: "abc",
    3: "def",
    4: "ghj",
  };

  let dfsres = [];
  let dfs = (str, i) => {
    // 判断最后的情况，即str.length > i，即将所有位都处理完毕
    if (digits.length - 1 < i) {
      dfsres.push(str);
      return;
    }

    // 拿到这一位的所有字母，交给下一层级
    map[digits[i]].split("").forEach((item) => {
      dfs(str + item, i + 1);
    });
  };

  //   dfs("", 0);

  let bfs = () => {
    //   设置起始数组
    let arr = map[digits[0]].split("");
    let i = 1;
    //   对于层数的遍历
    while (i < digits.length) {
      let len = arr.length;
      // 消耗当层数组并生成下层数组
      while (len) {
        let index = arr.shift();
        map[digits[i]].split("").forEach((item) => {
          arr.push(index + item);
        });
        len--;
      }
      i++;
    }
    return arr;
  };
  let bfsres = bfs();

  return bfsres;
}
console.log(getLetters("23"));
