const { performance } = require("perf_hooks");

function insertionSort(arr) {
  const t0 = performance.now();
  const arra = arr.map((e) => e);
  let loopCounter = 0;

  for (let i = 1; i < arra.length; i++) {
    loopCounter += 1;

    for (let j = 1; i - j != -1; j++) {
      loopCounter += 1;
      if (arra[i] < arra[i - j]) {
        if (i - j === 0) {
          const temp = arra.splice(i, 1)[0];
          arra.splice(0, 0, temp);
        } else {
          continue;
        }
      } else {
        const temp = arra.splice(i, 1)[0];
        arra.splice(i - j + 1, 0, temp);
        break;
      }
    }
  }
  const t1 = performance.now()
  const t = (t1-t0)/1000
  return [arra, loopCounter,t];
}

module.exports = insertionSort;
