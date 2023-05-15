function debounce(fn, delay) {
  let flag = true;
  let time;
  let reFlag;
  let ctx;
  return function (...args) {
    ctx = this;
    if (flag) {
      flag = false;
      fn(...args);
      reFlag = setTimeout(() => {
        flag = true;
      }, delay);
    } else {
      clearTimeout(time);
      clearTimeout(reFlag);
      time = setTimeout(() => {
        fn.apply(ctx, args);
        reFlag = setTimeout(() => {
          flag = true;
        }, delay);
      }, delay);
    }
  };
}

let fn = debounce(log, 2000);
