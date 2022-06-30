/*
    Write a program that displays a string in reverse order
        - should read input from the keyboard
        - need to use the strlen string function
    Write a program that sorts the strings of an array using a bubble sort
        - need to use the strcmp and strcpy functions
*/

#include <stdio.h>
#include <string.h>

void reverseStr(char result[], char str[]);

int main () {

    // reverse string
    char someString[100];
    char reverse[100];
    printf("Enter some string:\n");
    scanf("%s", someString);
    reverseStr(reverse, someString);
    printf("\n%s", reverse);

    // bubble sort
    char wordArr[20][50];
    int numIn;
    char sorted[20][50];

    printf("Enter how many input: \n");
    scanf("%d", &numIn);
    for (int i = 0; i < numIn; i++) {
        scanf("%s", wordArr[i]);
    }
    
    bubbleSort(sorted, wordArr);
    for (int j = 0; j < numInl j++ ) {
        printf("%s", sorted[j]);
    }
    
    return 0;
}

void reverseStr(char result[], char str[]) {

    int len = strlen(str);
    int i;
    for (i = 0; str[i] != '\0'; i++) {
        result[i] = str[len - 1 - i];
        
    }
    result[i] = '\0';
    
}

void bubbleSort(char sortResult[][],char strArr[][]) {

    int i;
    for (i = 0; sortedArr[i] != '\0'; i++) {
        int j;
        for (j = i; sortedArr[j] != '\0'; j++) {
            char compareStr;
            strcpy(compareStr, strArr[j+1])
            if (strcmp(strArr[j], compareStr) == 1) {
                char temp[50];
                strcpy(temp, compareStr)
                
                strcpy(strArr[j+1], strArr[j]);
                strArr[j] = temp;
                strcpy(strArr[j], temp);
            }
        }
    }
    
}