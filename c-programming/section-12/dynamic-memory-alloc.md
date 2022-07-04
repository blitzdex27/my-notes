# Dynamic memory allocation

Allocation
`malloc` 
- the simplest standard library function that allocates memory at runtime is called malloc()

    - `void *malloc(int numBytes)`
    - 
    - provided by `stdlib.h`
    - returns the address of the first byte of memory that is allocated (void *)
    - `int *pNumber = (int*)malloc(100);` - allocates 100 bytes of memory to pointer for int pNumber
        - warning: 32 and 64 bit systems may have different memory allocation for int
    - `int *pNumber = (int*)malloc(25*sizeof(int));`
    - warning: malloc may return `NULL` in any case it cannot allocate memory
        - so it is a good practice to check if memory is allocated before using it
    

    ```c
        int *pNumber = (int*)malloc(25*sizeof(int));
        if (!pNumber) {
            // code to deal with memory allocation failure
        }
    ```

Releasing
- memory allocated on the heap will be automatically released when your program ends
- better to explicitly release the memory when you are done with it
- memory leak occurs when you allocated some memory dynamically and you do not retain the reference to it, so you are unable to release the memory
  - often occurs within a loop
  - beacuse you do not release the memory when it is no longer required, your program consumes more and more of the available memory on each loop iteration and eventually may occupy it all
- `free(void* pNumber)`
  -  release the memory for a block
  ```c
  free(pNumber);
  pNumber = NULL;
  ```
  - has formal parameter of type void*


`calloc`
- `void* calloc(int numBytes, int sizeOfType)`
- allocates memory as a number of elements of a given size
- initializes memory that is allocated so that all bytes are zero
- `int *pNumber = (int*)calloc(75, sizeof(int))

`void* realloc(void* allocPointer, int newSize)`
- reuse or extend memory that you previously allocated using `malloc()` and `calloc()`
- can return NULL