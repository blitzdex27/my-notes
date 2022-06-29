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

## Pointers

Pointers are variables that store address of other variables

### Declaring pointers

```c
int a; // integer
int *b; // pointer for integer
char c; // character
char *d; // pointer for character
double e; // double
double *f; // pointer for double
```

### Extracting memory address

Put an `&` ampersand before the variable

```c
int *b = &a;
```

### Extracting value from adress

Put an `*` asterisk before the address data type

```c

int value = *&a; // &a returns an address
int value2 = *b; // b is an address
// value == value2

```
