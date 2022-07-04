/*
    Write a program that allows a user to input a text string. 
    The program will print the text that was inputted. 
    The program will utilize dynamic memory allocation.

*/
#include <stdio.h>

int main () {

    char* name = (char*)malloc(sizeof(char)*20);
    printf("Enter a name:\n");
    scanf("%s", name);
    name = realloc(name, strlen(name) + 1);

    printf("%s", name);
    free(name);
    return 0;
}