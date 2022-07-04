#include <stdio.h>
#include <stdlib.h>

void copyArr(int* copyDest, int* copySrc, int size);
void printArr(int nums[], int arrLen);
void sort(int* numArr, int size);

void main() {
    int nums[] = { 1, 5, 7, 3, 2, 4};
    int arrLen = sizeof(nums) / sizeof(int);
    int* numsCopy = (int*)malloc(arrLen * sizeof(int));
    int largestThreeElems[3]; 
    
    // copy
    copyArr(numsCopy, nums, arrLen);

    // sort
    sort(numsCopy, arrLen);

    // largest three values
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < arrLen; j++) {
            if (numsCopy[arrLen-1-i] == nums[j]) {
                largestThreeElems[i] = j;
            }
        }
    }

    // largest three elements/index
    printArr(largestThreeElems, 3);
    
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

void printArr(int* arr, int arrLen) {
    printf("Largest three elems/indexes: [ ");
    for (int i = 0; i < arrLen; i++) {
        printf("%d ", arr[i]);
    }
    printf("]\n");
}