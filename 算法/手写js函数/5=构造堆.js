class Heap {
  constructor(cpf) {
    this.cpf = cpf;
    this.queue = [];
  }

  getFather(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeft(index) {
    return index * 2 + 1;
  }

  getRight(index) {
    return index * 2 + 2;
  }

  up(index) {
    if (index === 0) return;

    let fa = this.getFather(index);

    if (this.cpf(this.queue[fa], this.queue[index]) > 0) {
      this.swap(index, fa);
      this.up(fa);
    }
  }

  down(index) {
    let left = this.getLeft(index);
    let right = this.getRight(index);

    if (this.cpf(this.queue[left], this.queue[index]) < 0) {
      this.swap(index, left);
      this.down(left);
    }
    if (this.cpf(this.queue[right], this.queue[index]) < 0) {
      this.swap(index, right);
      this.down(right);
    }
  }

  push(val) {
    this.queue.push(val);
    this.up(this.queue.length - 1);
  }

  shift() {
    this.queue.shift();
    this.down(0);
  }

  peek() {
    return this.queue[0];
  }

  swap(a, b) {
    let temp = this.queue[a];
    this.queue[a] = this.queue[b];
    this.queue[b] = temp;
  }
}
// 小顶堆
let heap = new Heap((a, b) => a - b);

let arr = [4, 5, 1, 2, 6, 0, 3];

arr.forEach((item) => heap.push(item));

console.log(heap.queue);
