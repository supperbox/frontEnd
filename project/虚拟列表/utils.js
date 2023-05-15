// 防抖函数，在一定时间间隔内，执行最近的一次触发函数

function debounce(fn, delay) {
  let timeout = null;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, [...args]);
    }, delay);
  };
}

let test = debounce(() => {}, 100);

// 首次调用立即执行,如果存在空闲立即调用

function debounce(fn, delay, immediate) {
  let timeout = null;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      if (timeout) {
        timeout = setTimeout(() => {
          fn.apply(this, [...args]);
          timeout = null;
        }, delay);
      } else {
        fn.apply(this, [...args]);
        timeout = setTimeout(() => {
          timeout = null;
        }, delay);
      }
    } else {
      timeout = setTimeout(() => {
        fn.apply(this, [...args]);
      }, delay);
    }
  };
}

// 节流技术，如果触发完成，则在一段时间内不允许再次触发

function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      fn.apply(this, [...args]);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

let clickHandle = throttle(() => {
  console.log(123);
}, 3000);
