let y = [2, 1, 2, 3, 2, 3, 4, 5, 6, 5, 4, 7, 6, 7];

let newArray = [];

let i = 0;
for (i; i < y.length; i++) {
  let j = 0;
  let existing = false;
  let l = 0;
  for (l; l < newArray.length; l++) {
    if (y[i] === newArray[l]) {
      existing = true;
    }
  }
  if (!existing) {
    newArray.push(y[i]);
  }
}

console.log(newArray);
