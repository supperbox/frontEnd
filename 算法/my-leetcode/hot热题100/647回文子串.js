var countSubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      check(s.slice(i, j + 1));
    }
  }
  function check(str) {
    if (str.length === 1) {
      res++;
      return;
    }
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return;
      }
    }
    res++;
  }
  return res;
};

// console.log(countSubstrings("aaa"));

function countSubstrings2(s) {
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

  let res = 0;

  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        res++;
        dp[i][j] = 1;
      } else if (j - i === 1 && s[i] === s[j]) {
        res++;
        dp[i][j] = 1;
      } else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) {
        res++;
        dp[i][j] = 1;
      }
    }
  }
  return res;
}

console.log(countSubstrings2("aaa"));
