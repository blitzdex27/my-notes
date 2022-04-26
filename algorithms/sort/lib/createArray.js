function createArray(n, u) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const randNum = Math.round(Math.random() * u);
    arr.push(randNum);
  }
  return arr;
}

module.exports = createArray
