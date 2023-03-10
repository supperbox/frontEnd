function MyBind(context, args) {
  if (typeof context !== "function") {
    throw new Error("this is not a function");
  }

  let fn = this;

  function bindFn(...args2) {
    let Args = [...args, ...args2];
    Context = this instanceof bindFn ? this : context;
    return fn.Apply(Context, Args);
  }
  if (this.prototype) {
    bindFn.prototype = Object.create(this.prototype);
  }
  return bindFn;
}
