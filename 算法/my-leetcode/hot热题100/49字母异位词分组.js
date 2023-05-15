var groupAnagrams = function (strs) {
  let arr = strs.map((item) => item.split("").sort().join(""));
  let map = new Map();
  arr.forEach((item, index) => {
    if (!map.has(item)) {
      map.set(item, [index]);
    } else {
      map.get(item).push(index);
    }
  });
  let res = [];
  for (let i of map.values()) {
    let temp = [];
    i.forEach((item) => temp.push(strs[item]));
    res.push(temp);
  }
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
