/**
 * starting from the first element to the end, select the least value element (for ascending)
 * put that element as the first element
 * next, do the same starting from the second element
 * then put the resulting element as the second element
 * @param {array} arr
 */
const selectionSort = (arr) => {
  const arra = arr.map((e) => e);
  let loopCounter = 0;

  for (let i = 0; i < arra.length; i++) {
    loopCounter++;

    // 1. find least element:
    //    > save the element to be replaced later first
    let toReplace = arra[i];

    //    > find the least one
    // let least = arra[i];
    for (let j = i; j < arra.length - 1; j++) {
      loopCounter++;
      const num1 = arra[j];
      const num2 = arra[j + 1];

      if (num1 < num2) {
        arra[j + 1] = num1;
        arra[j] = num2;
        if (j === i) {
          toReplace = arra[j];
        }
      }
      if (arra.length - 1 === j + 1) {
        arra[i] = arra[j + 1];
        arra[j + 1] = toReplace;
      }
    }
  }
  return [arra, loopCounter];
};

module.exports = selectionSort;
