#include <stdio.h>

void requestInput(int nums[], int arrLen);
void printGiven(int nums[], int arrLen);
void checkIfWithinLimits(int nums[], int arrLen, int low, int high);

void main() {
    int nums[3];
    int arrLen = sizeof(nums)/sizeof(int);
    int lowLimit = 20;
    int highLimit = 50;

    requestInput(nums, arrLen);
    printGiven(nums, arrLen);
    checkIfWithinLimits(nums, arrLen, lowLimit, highLimit);
}

void printGiven(int nums[], int arrLen) {
    printf("Given numbers: [ ");
    for (int i = 0; i < arrLen; i++) {
        printf("%d ", nums[i]);
    }
    printf("]\n");
}

void requestInput(int nums[], int arrLen) {
    printf("Enter three numbers: \n");
    for (int i = 0; i < arrLen; i++) {
        scanf("%d", &nums[i]);
    }
}

void checkIfWithinLimits(int nums[], int arrLen, int low, int high) {
    printf("\nAre the given number in the range of %d to %d?\nResult: ", low, high);
    for (int i = 0; i < arrLen; i++) {
        if (nums[i] >= low && nums[i] <= high) {
            printf("TRUE\n");
            return;
        }
    }
    printf("FALSE\n");
    return;
}
