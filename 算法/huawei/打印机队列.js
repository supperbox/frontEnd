class printArr {
  constructor() {
    // super();
    this.quene = new Array(5).fill(0).map((item) => new Array());
    this.count = 1;
  }

  print(str) {
    console.log(this.quene);
    let arr = str.split(" ");
    if (arr[0] === "IN") {
      let quene = this.quene[arr[1] - 1];
      if (!quene.length || arr[2] > quene[quene.length - 1][0]) {
        quene.push([+arr[2], this.count++]);
      } else {
        for (let i = 0; i < quene.length; i++) {
          if (quene[i][0] >= +arr[2]) {
            quene.splice(i, 0, [+arr[2], this.count++]);
            break;
          }
        }
      }
    } else {
      if (!this.quene[arr[1] - 1].length) {
        return null;
      }
      return this.quene[arr[1] - 1].pop()[1];
    }
  }
}

let print = new printArr();

print.print("IN 1 1");
print.print("IN 1 2");
print.print("IN 1 3");
print.print("IN 1 3");
print.print("IN 2 1");
print.print("IN 2 1");
console.log(print.print("OUT 1"), print.print("OUT 1"), print.print("OUT 2"));
