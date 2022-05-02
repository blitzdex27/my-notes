function nextBigger(number) {
  //code
  const strNum = number.toString();
  let strArr = strNum.match(/\d/g);

  // check if single digit
  if (strArr.length === 1) return -1;
  // count digits that cannot be swapped
  let noHitCount = 0;

  // find the index where the digit need be changed
  let indexToChange = strArr.length - 2;
  for (let i = 0; i < strArr.length; i++) {
    const index = strArr.length - 1 - i;
    // the digit should have a greater digit next to it
    const greaterDigit = parseInt(strArr[index]);
    const lesserDigit = parseInt(strArr[index - 1]);
    if (greaterDigit > lesserDigit) {
      indexToChange = index - 1;
      break;
    } else {
      noHitCount++;
    }
  }
  // if no digits can be swapped (no bigger number can be formed)
  if (noHitCount === strArr.length) return -1;

  // temporarily separate the array starting on the indexToChange
  const strArrSeparated = strArr.splice(indexToChange);
  // swap the first value with a greater value but closest to it, no negative diff
  let leastDiff = Infinity;
  let leastDiffIndex = 1;
  for (let i = 1; i < strArrSeparated.length; i++) {
    let diff = Infinity;
    const fValue = parseInt(strArrSeparated[0]);
    const cValue = parseInt(strArrSeparated[i]);
    if (cValue > fValue && cValue - fValue > 0) {
      diff = cValue - fValue;
      if (leastDiff > diff) {
        leastDiff = diff;
        leastDiffIndex = i;
      }
    }
  }
  const temp = strArrSeparated[0];
  strArrSeparated[0] = strArrSeparated[leastDiffIndex];
  strArrSeparated[leastDiffIndex] = temp;
  // temporarily separated the first value in the array
  const fValue = strArrSeparated[0];
  strArrSeparated.splice(0, 1);
  // sort the rest of elements
  strArrSeparated.sort();
  strArr = [...strArr, fValue, ...strArrSeparated];
  // join the strings and parse into integer
  return parseInt(strArr.join(''));
}

console.log(nextBigger(59884848493558));
