## Reading

`fgetc(FILE* filepointer)`
- reads a character from a text file that has been opened for reading
- returns the character read as int
```c
int mchar = fgetc(pfile);
```
- EOF will be returned if end of file has been reached

`getc(FILE* filepointer)`
- identical to fgetc(), except
- it may be implemented as macro, whereas fgetc() is a function

`rewind()`
- positions the file pointer to beginning

## Renaming

Use rename() function
- return 0 if success
- file must not be open

```c
int rename (const char* oldname, const char* newname);
```


```c
if (rename ("C:\\temp\\myfile.txt", "C:\\temp\\myfile_copy.txt")) {
    printf("Failed to rename file.");
} else {
    printf("File renamed successfully.")
}
```

## Deleting

use `remove()` function
- file must not be open

```c
remove("myfile.txt");
```

## Pause

`system("pause");`