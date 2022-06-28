# files

## writing files

- FILE data type

```c
#include <stdio.h>
#include<stdlib.h>

int main() {

    FILE * fpointer = fopen("employees.txt", "w");
    fprintf(fpointer, "Jim, Salesman\nPam, Receptionist\nOscar, Accounting");



    fclose(fpointer);
    return 0;
}

```

- `fopen()` - method to open file
  - `w` - write
  - `r` - read
  - `a` - append
- `fclose()` - method to close file
- `fprintf()` - method to write

## reading files

```c
#include <stdio.h>
#include<stdlib.h>

int main() {

    char line[255];

    FILE * fpointer = fopen("employees.txt", "r");

    // reads first line of file
    fgets(line, 255, fpointer); // moves pointer of fpointer
    printf("%s", line);

    // reads second line of file
    fgets(line, 255, fpointer);
    printf("%s", line);

    fclose(fpointer);
    return 0;
}
```
