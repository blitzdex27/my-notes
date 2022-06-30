// get all prime numbers from 2-100
#include <stdio.h>

_Bool checkIfPrime(int num);

int main() {
    int arrSize = 98;

    int numArr[98] = {};
    for (int i = 2; i <= arrSize; i++) {
        numArr[i-2] = i;
    }
    
    // int primeArrSize = 0;
    // for (int j = 0; j < arrSize; j++) {
    //     if (checkIfPrime(numArr[j]) == 1) {
    //         primeArrSize++;
    //     }
    // }
    
    int primeArr[100] = {};
    int primeIndex = 0;
    for (int k = 0; k < arrSize; k++) {
        if (checkIfPrime(numArr[k]) == 1) {
            primeArr[primeIndex] = numArr[k];
            primeIndex++;
            printf("%d ", numArr[k]);
        }
    }
    
    return 0;
}

_Bool checkIfPrime(int num) {
    if (num == 2) return 1;
    if (num == 3) return 1;
    
    for (int i = num - 1; i > 1; i--) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
    
}