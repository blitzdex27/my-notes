const {
  insertionSort,
  selectionSort,
  bubbleSort,
} = require('./sortAlgorithms');
const {
  insertionSort: inSortMyOwn,
  sorter1,
  sorter2,
} = require('./sortAlgorithms/myOwn');
const { wrapper, timer, createArray } = require('./lib');

const arr = createArray(10000, 1000);

(async function () {
  // wraps

  const selectionSortWrapped = wrapper(selectionSort);
  const insertionSortWrapped = wrapper(insertionSort);
  const bubbleSortWrapped = wrapper(bubbleSort);

  // sort
  const {
    value: [sorted1, loops1],
    performance: p1,
  } = await timer(selectionSortWrapped(arr));
  const {
    value: [sorted2, loops2],
    performance: p2,
  } = await timer(insertionSortWrapped(arr));
  const {
    value: [sorted3, loops3],
    performance: p3,
  } = await timer(bubbleSortWrapped(arr));

  // display
  console.log('Selection sort:', loops1, p1);
  console.log('Insertion sort:', loops2, p2);
  console.log('Bubble sort:', loops3, p3)
})();
