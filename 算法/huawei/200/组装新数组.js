// 题目描述
// 给你一个整数M和数组N，N中的元素为连续整数，要求根据N中的元素组装成新的数组R，
// 组装规则:
// 1.R中元素总和加起来等于M
// 2.R中的元素可以从N中重复选取
// 3.R中的元素最多只能有1个不在N中，且比N中的数字都要小(不能为负数)
// 输入描述
// 第一行输入是连续数组N，采用空格分隔第二行输入数字M
// 输出描述
// 输出的是组装办法数量,int类型备注
// . 1≤M≤30
// - 1≤ N.length ≤ 1000

const fn = (arr, sum) => {
  let temp = new Array(arr[0]).fill(0).map((_, index) => index);

  let res = 0;
  function getTimes(sum, start) {
    if (sum === 0) {
      res++;
      return;
    } else if (sum < 0) {
      return;
    }
    for (let i = start; i < arr.length; i++) {
      getTimes(sum - arr[i], i);
    }
  }
  let result = 0;
  for (let i of temp) {
    getTimes(sum - i, 0);
    result += res;
    res = 0;
  }

  return result;
};

console.log(fn([2, 3], 5));
