/*
    Write a function to count the number of characters in a string (length)
    - cannot use the strlen library function
    - function should take a character array as a parameter
    - should return an int (the length)

    Write a function to concatenate two character strings
    - cannot use the strcat library function
    - function should take 3 parameters
        - char result[]
        - const char str1[]
        - const char str2[]
        - can return void
    
    Write a function that determines if two strings are equal
        - cannot use strcmp library function
        - function should take two const char arrays as parameters and return Boolean of true if they are equal and false otherwise
    
*/

#include <stdio.h>

int getStrLen(char str[]);
void concatStr(char result[], char str1[], char str2[]);
_Bool compareStr(const char str1[], const char str2[]);

int main () {

    char myStr[] = "hello world";
    char str2[] = "hello world";
    
    // length
    int len = getStrLen(myStr);
    printf("Length: %i\n", len);
    
    // concatenation
    char str[100];
    concatStr(str, myStr, str2);
    printf("Concatenation: %s\n", str);
    
    // check if stings are equal
    printf("Check if Equal: %i", compareStr(myStr, str2) );

    return 0;
}

int getStrLen(char str[]) {
    int i = 0;
    int length = 0;
    while(str[i] != '\0') {
        i++;
        length++;
    }
    return length;
}

void concatStr(char result[], char str1[], char str2[]) {
    int i;
    for (i = 0; str1[i] != '\0'; i++) {
        result[i] = str1[i];
    }
    int j = i;
    for (int k = 0; str2[k] != '\0'; k++) {
        result[j] = str2[k];
        j++;
    }
    result[j] = '\0';
}

_Bool compareStr(const char str1[], const char str2[]) {
 
    if (getStrLen(str1) != getStrLen(str2)) {
        return 0;
    }
    int i = 0;
    while (str1[i] != '\0' || str2[i] != '\0') {
        if (str1[i] == str2[i]) {
            i++;
            continue;
        } else {
            return 0;
        }
    }
    return 1;
}