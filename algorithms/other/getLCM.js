// method 1:
// 1. list the multiples of the numbers
// 2. if a multiple is also a multiple of all the given, that is a common multiple
// 3. the least common multiple (LCM) is the multiple closest to the number

// method 2:
// 1. list the prime factors of each numbers
// 2. remove a factor to each if it exists on all numbers given
// 3. get the product of the resulting prime factors

/**
 *
 * @param  {...any} args
 * @returns
 */
function getLCMM1(...args) {
  const given = args;

  const multiples = [];
  // 1. list all multiples of each given number

  let temp = given[0];
  while (true) {
    temp += given[0];
    let multipleCheck = 0;
    for (let j = 0; j < given.length; j++) {
      if (temp % given[j] === 0) {
        multipleCheck++;
      } else {
        break;
      }
    }
    if (multipleCheck === given.length) {
      return temp;
    }
  }

  return false;
}

console.log(getLCMM1(28, 8442, 24, 32));
