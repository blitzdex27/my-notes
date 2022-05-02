/*-----------------------------------------------------------------------
---------------PRIME FACTORS-------------*/

// 1. list all numbers less than the given number

function getPrimeFactors(num) {
  let primeFactors = []

  for (let i = 2; i <= num/2 - num%2; i++) {
      if (num%i === 0) {
          primeFactors[primeFactors.length] = i
      }
  }

  function prime


  return primeFactors


}

console.log(getPrimeFactors(1000));
