#include <stdio.h>
#include <stdlib.h>

void copyArr(int* copyDest, int* copySrc, int size);
void sort(int* numArr, int size);

void main() {
    int nums[] = { 1, 5, 7, 3, 2, 4};
    int arrLen = sizeof(nums) / sizeof(int);
    int* numsCopy = (int*)malloc(arrLen * sizeof(int));
    
    // copy
    copyArr(numsCopy, nums, arrLen);

    // sort
    sort(numsCopy, arrLen);

    // second largest elem/index
    for (int i = 0; i < arrLen; i++) {
        if (numsCopy[arrLen-1-1] == nums[i]) {
            printf("Second largest elem/index: %d", i);
        }
    }
    
    free(numsCopy);
}

void copyArr(int* copyDest, int* copySrc, int size) {
    for (int i = 0; i < size; i++) {
        *(copyDest + i) = *(copySrc + i);
    }
    return;
}

void sort(int* numArr, int size) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size - 1; j++) {
            if (numArr[j] > numArr[j + 1]) {
                int temp = numArr[j + 1];
                numArr[j + 1] = numArr[j];
                numArr[j] = temp;
            }
        }
    }
}
