// GCD using Euiclid's Algorithm
#include <stdio.h>

int getGCD(int num1, int num2);

int main() {

    int num1 = 12;
    int num2 = 10;
    
    int gcd = getGCD(num1, num2);
    
    printf("%i", gcd);
    
    
    return 0;
}



int getGCD(int num1, int num2) {
    
    if (num1 == 0 && num2 == 0) {
        printf("%s", "hello");
        return 0;
    }
    if (num1 == 0) {
        
        return num2;
    }
    if (num2 == 0) {
        return num1;
    }
    
    int numDividend;
    int numDivisor;
    
    if (num1 > num2) {
        numDividend = num1;
        numDivisor = num2;
    } else {
        numDividend = num2;
        numDivisor = num1;
    }
    
    while (numDivisor != 0) {
        
        int r = numDividend % numDivisor;
        numDividend = numDivisor;
        numDivisor = r;
    }
    
    return numDividend;
}