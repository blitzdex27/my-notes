const { performance } = require("perf_hooks");

const insertionSort = (arr) => {
  const t0 = performance.now();
  const n = arr.length;
  const arra = arr.map((e) => e);
  let loopCount = 0;

  // iterate from second element to end of array
  for (let i = 1; i < n; i++) {
    // console.log("for1");
    loopCount++;
    // compare the current element in iteration
    const key = arra[i];
    let j;
    for (j = i - 1; j >= 0 && key < arra[j]; j--) {
      loopCount++;
      arra[j + 1] = arra[j];
      //   console.log("for2");
    }
    arra[j + 1] = key;
  }
  const t1 = performance.now();
  const t = (t1 - t0) / 1000;
  return [arra, loopCount, t];
};

module.exports = insertionSort;
