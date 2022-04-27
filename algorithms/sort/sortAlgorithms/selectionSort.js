/**
 *
 * @param {unsorted array} arr
 * @returns sorted array
 * Selection sort
 * The array will be divided into two parts, sorted and unsorted. The unsorted part will be searched for the least value and place it at the beginning of the unsorted part, from which will become part of the sorted part.
 * 1. Divide the array into sorted and unsorted part
 * 2. Search the least value within the unsorted array
 * 3. Put the least value into the beginning of the unsorted array
 * 4. That value will now be part of the sorted array
 *
 */
function selectionSort(arr) {
  const arrA = arr.map((e) => e); // create new copy of given array
  let loopCount = 0;
  for (let i = 0; i < arr.length; i++) {
    loopCount++;
    let min = arrA[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      loopCount++;
      if (min > arrA[j]) {
        min = arrA[j];
        minIndex = j;
      }
    }
    const temp = arrA[i];
    arrA[i] = min;
    arrA[minIndex] = temp;
  }

  return [arrA, loopCount];
}

module.exports = selectionSort;
