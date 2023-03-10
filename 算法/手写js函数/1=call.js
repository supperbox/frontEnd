function myCall(thisArg, ...args) {
  if (typeof this !== "function") {
    throw new Error("this is not a function");
  }
  let context = thisArg;
  if (!thisArg) {
    context = Window;
  }
  context.fn = this;
  return context.fn(...args);
}
