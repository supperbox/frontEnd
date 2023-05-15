const fn = (goat, wolf, limit) => {
  let isOdd = limit % 2 === 0;

  function go(goat, wolf, limit, side) {
    // console.log(goat, wolf, limit, side);
    let sum = goat + wolf;
    let over = goat - wolf;
    let times = 0;

    let half = Math.floor(limit / 2);
    if (over < 1) {
      return 0;
    }
    if (sum <= limit) {
      return 1;
    }

    if (over === 1) {
      if (side < 1) {
        return 0;
      } else {
        if (side === 1) {
          times = go(goat - half, wolf - half, limit, side) + 1;
        }
        if (side > 1) {
          if (isOdd) {
            times = go(goat - half, wolf - half, limit, side) + 1;
          } else {
            times = go(goat - half, wolf - half - 1, limit, side - 1) + 1;
          }
        }
      }
    }
    if (over === 2) {
      if (side === 0) {
        if (isOdd) {
          times = go(goat - half, wolf - half + 1, limit, 1) + 1;
        } else {
          times = go(goat - half - 1, wolf - half, limit, 1) + 1;
        }
      } else if (side === 1) {
        if (isOdd) {
          times = go(goat - half, wolf - half, limit, 1) + 1;
        } else {
          times = go(goat - half - 1, wolf - half, limit, 2) + 1;
        }
      } else {
        if (isOdd) {
          times = go(goat - half, wolf - half, limit, 1) + 1;
        } else {
          times = go(goat - half, wolf - half - 1, limit, side - 1) + 1;
        }
      }
    }
    if (over > 2) {
      return Math.ceil(sum / limit);
    }
    return times;
  }
  return go(goat, wolf, limit, 0);
};

console.log(fn(4, 2, 2));
