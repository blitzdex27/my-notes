# Accessing files

- a program references a files through a pointer
- a file pointer points to a struct of type FILE that represents a stream
  - contains information about the file
    - read/write
    - address of the buffer in memory to be used in data
    - a pointer to the current position

## Opening a file

```c
FILE *fopen(const char * restrict name, const char * restrict mode);
```

- returns a pointer of type FILE*
- returns NULL if file cannot be opened for some reason



## Modes

- `"w"` - Opens a text file for write operations. Overwrites.
- `"a"` - Opens a text file for append operations. Appends.
- `"a"` - Open a text file for read operations. Reads.
- `"w+"` - Open a text file for update (reading and writing). Overwrites if exists, create file if not.
- `"a+"` - Open a text file for update (reading and writing). Appends if exists, create file if not.
- `"r+"` - Open a text file for update (for both reading and writing)

## Closing

```c
fclose()
```
`int fclose(FILE * name)`
- accepts a file pointer argument
- returns EOF (int) if an error occurs
- defined in stdio.h as a negative integer that is usually equivalent to value -1
- returns 0 if successful

## Reading

### Read using `fgetc`

> `int fgetc(FILE *_file)`

```c
#include <stdio.h>

int main () {

    FILE *fp = fopen("myfile.txt", "r");

    if (fp == NULL) {
        perror("Error in opening file");
        return -1;
    }

    int c = fgetc(fp);
    while (c != EOF ) {
        printf("%c", c);
        c = fgetc(fp);
    }
    // alternative
    // int c;
    // while ((c = fgetc(fp)) != EOF ) {
    //     printf("%c", c);
    // }


    fclose(fp);
    return 0;
}
```

### Reading using `fgets`

> `char *fgets(char *str, int nchars, FILE *stream)`

Can be used to read from any file or stream
- will read until it encounters '\n' or nchars-1 characters
- newline character is read, and is retained in the string
- a '\0' character will be appended to the end of string
- e.g. hello world \n\0
- returns pointer str if no error
- returns NULL is there is an error
- returns NULL if EOF is read
```c
#include <stdio.h>

int main () {

    FILE* myFile = fopen("myfile.txt", "r");

    if (myFile == NULL) {
        perror("Cannot read file for some reason.");
        return -1;
    }

    char str[60];

    // loop if need to read multiple lines
    if (fgets(str, 60, myFile) != NULL) {
        printf("%s", str);
    }

    fclose(myFile);

}

```
### Reading formatted input from a file

> `scan fscanf(FILE *stream, const char *format, ...)`

- second argument is the format
  - a C string that contains one or more of the following items
    - whitespace character
    - non-whitespace character  
    - format specifiers
    - usage is similar to scanf, but, from a file

Example 1

```c
#include <stdio.h>

int main () {

    char fname[10], lname[10];
    int age;

    FILE* fp;

    fp = fopen("myfilee.txt", "r");

    if (fp == NULL) {
        perror("cannot read");
        return -1;
    }

    fscanf(fp, "%s %s %d", fname, lname, &age);

    printf("%s\n", fname);
    printf("%s\n", lname);
    printf("%d\n", age);

    fclose(fp);

}

```

Example 2
```c
#include <stdio.h>

int main () {

    char fname[10], lname[10];
    int age;

    FILE* fp;

    fp = fopen("myfilee.txt", "w+");

    if (fp != NULL) {
        fputs("Dekideks dekoo 25", fp);
    }
    rewind(fp);
    fscanf(fp, "%s %s %d", fname, lname, &age);

    printf("%s", fname);
    printf("%s", lname);
    printf("%d", age);

    fclose(fp);

}
```

## Writing

### Writing using `fputc()`

> `int fputc(int ch, FILE* pfile)`

writes a single character to a text file
    - return the character that was written if successful
    - return EOF if failure
    - same with `putc()`, only difference is putc can be implemented in the standard library as a macro

Example
```c
#include <stdio.h>

int main () {


    FILE * myfile = fopen("newFile.txt", "w+");

    if (myfile != NULL) {
        int ch;
        for (ch = 33; ch < 100; ch++) {
            int putRes = putc(ch, myfile);
        }
    }
    fclose(myfile);
    return 0;
}
```

### Writing using `fputs()`

> `int fputs(const char * str, FILE * pfile);`

- first argument is a pointer to a character string
- second argument is the file pointer
- will write characters from a string until it reaches '\0'
- does not write null character
- can complicate reading back variable-length strings from a file that have been written by fputs()
- expecting to write a line of text that has a newline character at the end
- returns non-negative value
- returns EOF if encounters an error

### Writing using `fprintf()`

> `int fprintf(FILE *stream, const char *format, ...)`

- the first argument to this function is the pointer to a FILE object that identifies a stream
- second argument is the format
  - a C string that contains one or more of the following items
    - whitespace character
    - non-whitespace character
    - format specified
    - usage is similar to printf, but, to a file
- returns no. of characters written if successful
- returns negative number if not

```c
#include <stdio.h>

int main () {


    FILE * myNewFile = fopen("mynewfile.txt", "w+");

    if (!NULL)
        fprintf(myNewFile, "%s %s %s %s %d", "Hello", "my", "number", "is", 555);

    fclose(myNewFile);

    return 0;
}
```