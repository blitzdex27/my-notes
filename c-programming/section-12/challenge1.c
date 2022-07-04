#include <stdio.h>

int strLen(char* str);
int main() {
    char myStr[] = "hello woowlrd";
    printf("%i", (strLen(myStr)));
}

int strLen(char* str) {
    char* pointInit = str;
    while(*pointInit) ++pointInit;
    return pointInit - str;
}