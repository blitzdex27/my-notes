let hello = [1,2]

console.log(hello.fin)
















// function filter(arr, min, max) {
//   // Enter code below
//   var toDeleteCount = 0;
//   var adj = 0;
//   var loopCount = 0
//   for (var i = 0; i < arr.length; i = i + 1 - adj) {
//     adj = 0;
//     if (arr[i] >= min && arr[i] <= max) {
//     } else {
//       for (var j = i; j < arr.length - 1; j++) {
//         var temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//       toDeleteCount++;
//       adj++;
//     }
//     loopCount++
//     if (loopCount === arr.length) break
//   }
//   console.log(arr);
//   arr.length = arr.length - toDeleteCount;
//   console.log(arr);
//   return arr;
// }

// filter([2,4,3,5], 2, 6);
