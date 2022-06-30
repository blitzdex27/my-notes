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

String analyzation
```c
#include <stdio.h>
#include <string.h>

int main() {
    
    char buff[100];
    int letters;
    int digits;
    int punctuations;
    
    printf("Enter some interesting string:\n");
    scanf("%s", buff);
    
    int i = 0;
    while(buff[i]) {
        if (isalpha(buff[i])) {
            ++letters;
        }
        if (isdigit(buff[i])) {
            ++digits;
        }
        if (ispunct(buff[i])) {
            ++punctuations;
        }
        i++;
    }
    
    printf("You have entered:\n%d letters\n%d digits, and \n%d punctuations", letters, digits, punctuations);
    
    return 0;
}
```

Converting strings
```c
#include <stdio.h>
#include <string.h>

int main() {
    
    char myChar[] = "hellowOrld";
    char upper[20];
    int i = 0;
    while (1) {
        if (myChar[i] == '\0') {
            upper[i] = '\0';
            break;
        } else {
            upper[i] = toupper(myChar[i]);
        }
        i++;
    }
    printf("%s", upper);
    
    return 0;
}

```
Coverting strings version 2
```c
#include <stdio.h>
#include <string.h>

int main() {
    
    char myChar[] = "hellowOrld";
    char upper[20];

    for(int i = 0; (upper[i] = toupper(myChar[i])) != '\0'; i++);
      
    printf("%s", upper);
    return 0;
}
```

Converting strings to double (not working?)
```c
#include <stdio.h>
#include <string.h>
// Converting strings to double
int main() {
    char myStr[] = "25.6 89.2 90.2";
    char *ptrStr = &myStr;
    char *ptr = NULL;
    
    double value;
    
    while (1) {
        value = strtod(ptrStr, &ptr);
        
        if (ptrStr == ptr) {
            break;
        } else {
            printf(" %f", value);
            ptrStr = ptr;
        }
    }
    
    return 0;
}
```