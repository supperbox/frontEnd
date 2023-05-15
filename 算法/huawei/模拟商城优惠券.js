const fn = (tips, num, prices) => {
  function small(type, num, price) {
    switch (type) {
      case 0:
        price = price - Math.floor(price / 100) * 10;
        if (num === 1) {
          return price;
        } else {
          return small(0, num - 1, price);
        }
      case 1:
        price = Math.floor(price * 0.92);
        return price;
      case 2:
        price = price - 5 * num;
        return price;
    }
  }
  console.log(small(0, 5, 200));
  function smallest(price) {
    let type = [0, 1, 2];
    let tip = tips;
    let res = price;
    let sum = 0;

    type.forEach((i) => {
      type.forEach((j) => {
        if (i === j) {
          return;
        }
        let newPrice = small(j, tip[j], small(i, tip[i], price));
        if (res === newPrice) {
          if (tip[j] + tip[i] < sum) {
            sum = tip[i] + tip[j];
          }
        } else if (res > newPrice) {
          res = newPrice;
          sum = tip[i] + tip[j];
        }
      });
    });
    return [res, sum];
  }
  return prices.map((item) => {
    return smallest(item);
  });
};

console.log(fn([3, 2, 5], 3, [100, 200, 400]));
