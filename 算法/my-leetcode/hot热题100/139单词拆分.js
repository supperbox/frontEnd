let map = new Map();
var wordBreak = function (s, wordDict) {
  if (s.length === 0) {
    return true;
  }
  if (map.has(s)) {
    return map.get(s);
  }

  let res = false;
  for (let i = 0; i < wordDict.length; i++) {
    let str = wordDict[i];
    let index = s.indexOf(str);
    if (index > -1) {
      res =
        wordBreak(s.slice(0, index), wordDict) &&
        wordBreak(s.slice(index + str.length), wordDict);
    }
    if (res) {
      break;
    }
  }

  if (!map.has(s)) {
    map.set(s, res);
  }
  return res;
};

console.log(wordBreak("a", ["b"]));
