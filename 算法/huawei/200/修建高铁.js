const fn = (arr) => {
  let n = arr[0][0];

  let club = new Club(n);
  arr.shift();
  arr.sort((a, b) => a[2] - b[2]);
  console.log(arr);
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let pre = club.club.slice();
    club.uni(arr[i][0], arr[i][1]);
    console.log(club.club);

    if (pre.toString() !== club.club.toString()) {
      res += arr[i][2];
    }
  }
  if (club.count > 1) {
    return -1;
  }

  return res;
};

class Club {
  constructor(n) {
    this.club = new Array(n + 1).fill(0).map((_, index) => index);
    this.count = n;
  }

  find(index) {
    if (this.club[index] !== index) {
      return this.find(this.club[index]);
    } else {
      return index;
    }
  }

  uni(i, j) {
    let temp = this.find(i);
    let index = this.find(j);
    if (temp !== index) {
      this.club[index] = temp;
      this.count--;
    }
  }
}

console.log(
  fn([
    [6],
    [1, 3, 1],
    [4, 6, 2],
    [2, 5, 3],
    [3, 6, 4],
    [1, 4, 5],
    [2, 3, 5],
    [3, 4, 5],
    [2, 1, 6],
    [3, 5, 6],
    [5, 6, 6],
  ])
);

// let link = new Array(n + 1).fill(0).map((item) => []);

// for (let i = 1; i <= n; i++) {
//   link[arr[i][0]].push(arr[i][1]);
//   link[arr[i][1]].push(arr[i][0]);
// }
