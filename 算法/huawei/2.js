// 字符串排序

const sortWord = (str) => {
  let arr = str.split(" ");

  let map = new Map();

  arr = arr.map((item) => {
    return item.split("").sort().join("");
  });

  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  });

  function check(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        continue;
      }
      if (str1[i] > str2[i]) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  arr.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      if (a.length === b.length) {
        return check(a, b);
      } else {
        return a.length - b.length;
      }
    } else {
      return map.get(b) - map.get(a);
    }
  });
  return arr.join(" ");
};

console.log(sortWord("My sister is in the house not in the yard"));
console.log(sortWord("This is an apple"));
