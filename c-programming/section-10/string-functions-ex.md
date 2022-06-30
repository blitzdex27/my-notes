# String Function Examples

`strtok`
`char *strtok(char strTarget[], char delimiters[])`
```c
    #include <stdio.h>
    #include <string.h>

    void sayHello ();
    int main() {
        
        char myStr[] = "Hello - what is - going on?";
        char delimiter[] = "-";
        char *token;
        
        token = strtok(myStr, delimiter);
        printf("%s\n", token);
        while(token != NULL) {
            token = strtok(NULL, delimiter);
            printf("%s\n", token);
        }
        return 0;
    }
    ```