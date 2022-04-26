function findMax(arr) {
  const arra = arr.map((e) => e);
  let loopCounter = 0;

  let noHitCounter = 0;
  let x = 0;

  while (true) {
    if (x === arra.length - 1) {
      x = 0;
    }

    const smaller = arra[x];
    const larger = arra[x + 1];
    if (smaller > larger) {
      const temp = smaller;
      arra[x] = larger;
      arra[x + 1] = temp;
      //   x = 0;
      noHitCounter = 0;
    } else {
      noHitCounter = noHitCounter + 1;
      //   x = x + 1;
    }
    x = x + 1;
    if (noHitCounter === arra.length) {
      break;
    }
    loopCounter += 1;
  }

  return [arra, loopCounter];
}

module.exports = findMax;
