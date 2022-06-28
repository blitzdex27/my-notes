# pointers

- a type of data that points to a memory address

defining a pointer variable

```c
#include <stdio.h>
int main () {
    int age = 30;

    int *pAge = &age;

    printf("%p", pAge);
    return 0;
}

```

- `*pAge` tells that you are going to store a pointer
- `&age` returns the memory address of variable age

Deferencing a pointer (extracting the value inside the memory)

```c
#include <stdio.h>
int main () {
    int age = 30;
    int *pAge = &age;

    printf("%d", *pAge);
    //or
    printf("%d", *&age)
    return 0;
}
```
