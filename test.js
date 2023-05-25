function a() {
  console.log(123);
}

for (let i in a) {
  console.log(i);
}

console.log(a);
console.log(a.prototype);
console.log(a.name);
