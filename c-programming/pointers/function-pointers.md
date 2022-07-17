```c
#include <stdio.h>
int Add(int a, int b) {
    return a + b;
}

int main () {

    int c;

    // pointer to function that should take
    // (int,int) as argument/parameter and return int
    // note: this is compressed, *P means it will hold a pointer, (*p) separates it from the left "int", because that "int" means the return type of the function. whereas normally, if you do this "int *p", the variable p expects to be assigned a pointer value, and will return a pointer value also. on the otherhand, "int (*p)" means it expects to be assigned with a pointer value, and return an int value.

    int (*p)(int, int);
    p = &Add;

    c = (*p)(2, 3);

    printf("%d", c);
}

```
