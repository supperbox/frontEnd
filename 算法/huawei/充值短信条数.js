const fn = (arr, num) => {
  let dp = new Array(num).fill(0);
  dp[0] = arr[0];
  for (let i = 1; i < num; i++) {
    if (i < arr.length) {
      dp[i] = arr[i];
    }

    let mid = Math.floor((i - 1) / 2);
    for (let j = 0; j <= mid; j++) {
      dp[i] = Math.max(dp[i], dp[j] + dp[i - 1 - j]);
    }
  }
  console.log(dp);
  return dp[num - 1];
};

console.log(fn([10, 20, 30, 40, 60, 60, 70, 80, 90, 150], 1500));
