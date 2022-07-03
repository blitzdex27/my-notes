# Strings

## Array method

### Defining

```c
char str[6];
```

Note: this 6 bytes of memory will be stored on the stack

### Defining while initializing

```c
// method 1
char str[6] = { 'H', 'E', 'L', 'L', 'O', '\0' }

// method 2
char str[6] = { "HELLO" };
// method 3: string literal
char str[] = "HELLO";
```

### Modifying

```c
char str[] = "HELLO";
str[0] = 'W';
str[1] = 'O';
str[2] = 'R';
str[3] = 'L';
str[4] = 'D';
str[5] = '\0';
```

### Checking the leng

```c
char str[] = "HELLO";

// method 1: get the size, which will be 6 bytes, then decrease by 1
int len = sizeof(str) - 1;
// method 2: loop through
int len = 0;
int i = 0;
while(str[i] != '\0') {
    len++;
    i++;
}

// method 2.1: shorter
int len = 0;
for(int i = 0; str[i] != '\0'; i++, len++)
```

## Pointer method

### defining

```c
char* str = "HELLO"; // unmutable
```

Note: this will be stored on the text side memory during compilation and so will be treated as constant

### operation

```c
char str[] = "HELLO";

// method 1: direct
char firstChar = *(str); // 'H'
char seconChar = *(str + 1); // 'E'
char thirdChar = *(str + 2); // 'L'

// method 2: through pointer var
char* strPointer = str[] // or simply = str
char firstChar = *(strPointer); // 'H'
char seconChar = *(strPointer + 1); // 'E'
char thirdChar = *(strPointer + 2); // 'L'

// method 2.1: moving the pointer
char* strPointer = str[] // or simply = str
char firstChar = ++strPointer; // 'H'
char seconChar = ++strPointer; // 'E'
char thirdChar = ++strPointer; // 'L'
```

### Modifying

```c
char str[] = "HELLO";
char* strPointer = str;
strPointer[0] = 'W';
strPointer[1] = 'O';
strPointer[2] = 'R';
strPointer[3] = 'L';
strPointer[4] = 'D';
strPointer[5] = '\0';
```

### Prevent modification

Prevent modification to the value

```c
char str[] = "HELLO";

char* const strPointer = str;
strPointer[0] = 'W'; // modifying will return an error
```

Prevent modification to the address stored in the pointer

```c
char str[] = "HELLO";
char str2[] = "WORLD";

const char* strPointer = str;
strPointer[0] = 'W'; // will not return an error
strPointer = str2; // will return error

```

## important

- arrays are always passed to function by reference
