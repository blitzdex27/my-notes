# Data Structures

## Linked list

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int number;
    struct node *next;
}
node;

int main(void)
{
    node *list = NULL;

    node *n = malloc(sizeof(node));

    if (n == NULL)
    {
        return 1;
    }

    n->number = 1;
    n->next = NULL;

    list = n;

    // free(n);

    n = malloc(sizeof(node));

    if (n == NULL)
    {
        free(list);
        return 1;
    }

    n->number = 2;
    n->next = NULL;

    list->next = n;

    // free(n);

    n = malloc(sizeof(node));

    if (n == NULL)
    {
        node *tmp = list->next;
        free(list);
        free(tmp);
        return 1;
    }

    n->number = 3;
    n->next = NULL;

    list->next->next = n;

    // free(n);

    for (node *tmp = list; tmp != NULL; tmp = tmp->next)
    {
        printf("%i\n", tmp->number);
    }

    // inserting new element

    n = malloc(sizeof(node));
    n->number = 4;
    n->next = list->next;
    list->next = n;

    for (node *tmp = list; tmp != NULL; tmp = tmp->next)
    {
        printf("%i\n", tmp->number);
    }

}
```

### With explanations:

```c
typedef struct node
{
    int number;
    struct node *next;
}
node
```

Define empty list

```c
node *list = NULL
```

Allocate a memory for `n` of type `node`, with a size needed by a `node` type structure, which is 2 bytes in this case (1 byte for in type variable and 1 byte for next variable)

```c
node *n = malloc(sizeof(node))
```

if `n` is not empty, where it should contain an andress, then go to that structure and set the property number to 1.

```c
if (n != NULL)
{
    (*n).number = 1;
}
```

This means "go to Where this is equivalent to:

```c
if (n != NULL)
{
    n->number = 1
}
```

Point `list` to the temporary variable `n` so it points to that `node` structure in the memory.

```c
list = n
```

Point to the next node

```c
node *n = malloc(sizeof(node));
if (n != NULL)
{
    n->number = 2;
    n->next = NULL;
}
list->next = n;
```

Point to the next other node

```c
node *n = malloc(sizeof(node));
if (n != NULL)
{
    n->number = 3;
    n->next = NULL;
}
list->next->next = n;
```

## Manual adding element into a list

Copying into a temporary variable with appropriate size of allocated memory, then setting the pointer of the original list into the address that the temp. variable is pointing to.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *list = malloc(3 * sizeof(int));

    // (*list) = 1;
    // (*list+1) = 2;
    // (*list+2) = 3;
    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    // i want another element

    int *tmp = malloc(4 * sizeof(int));

    for (int i = 0; i < 3; i++)
    {
        tmp[i] = list[i];
    }

    tmp[3] = 4;

    free(list);

    list = tmp;

    // free(tmp);

    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }
    free(list);
}
```

## Hash table

An array of linked list

## Tries

A tree of linked list.

O(1)

To pay for speed, 

# Abstract Data Structure

## Queue
First in, first out (FIFO)
* enqueue - go to store and wait in line
* deqeueu - they are ready to serve you so you get out of line

## Stacks
Last in, first out (LIFO)

## Dictionaries

