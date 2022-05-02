
/**
 * 
 * @param {limit: any} n 
 * @returns array
 */
function getPrimes (n) {
    const primes = []
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < i/2; j++){
            if (i/2 < 2) {
                primes[primes.length]
            }
        }

    }

    return primes 
}

console.log(getPrimes(10))