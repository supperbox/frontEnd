function throttle(fn, delay) {
  let flag = true;
  let preview;
  let time;
  return function (...args) {
    const ctx = this;
    if (flag) {
      flag = false;
      preview = Date.now();
      fn.call(ctx, ...args);
      setTimeout(() => {
        flag = true;
      }, delay);
    } else {
      // 本来不需要写入功能的，但是为了整合期间发生的函数
      if (time) {
        return;
      }
      console.log("等待触发");
      time = setTimeout(() => {
        if (flag) {
          flag = false;
          preview = Date.now();
          fn.call(ctx, ...args);
          setTimeout(() => {
            flag = true;
          }, delay);
        }
        time = null;
      }, delay - (Date.now() - preview) + 1);
    }
  };
}

let log = () => {
  let time = new Date();
  console.log(time.getSeconds());
};

let test = throttle(log, 5000);
