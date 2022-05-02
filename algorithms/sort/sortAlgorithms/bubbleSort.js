function bubbleSort(arr) {
  let loopCount = 0;
  const arra = arr.map((e) => e);

  for (let i = 0; i < arra.length - 1; i++) {
    loopCount++;

    for (let j = 0; j < arra.length - 1 - i; j++) {
      loopCount++;
      if (arra[j] > arra[j + 1]) {
        const temp = arra[j];
        arra[j] = arra[j + 1];
        arra[j + 1] = temp;
      }
    }
  }
  return [arra, loopCount];
}

module.exports = bubbleSort;
