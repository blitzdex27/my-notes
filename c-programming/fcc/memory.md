# memory addresses

```c
#include <stdio.h>
int main () {
    int age = 30;
    double gpa = 3.4;
    char grade = 'A';

    printf("%p", &age);
    // %p specifier stands for pointer
    return 0;
}
```
