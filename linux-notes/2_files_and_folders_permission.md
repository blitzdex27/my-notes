# File and Folder Permissions

## Finding Out About Files

- `file` determines file type

  ```bash
  file myfile.txt
  ```

- `stat` display ownership, modification information, etc.

  ```bash
  stat myfile.txt
  ```

- `ls -R <folder path>` lists contents recursively through the folder

  - `-l` lists files/folders with more details (long)

  ```bash
  dexter@DESKTOP-PQLTFVJ:~$ ls -l
  total 12
  drwxr-xr-x 1 dexter dexter  512 Aug  2  2021 Desktop
  -rw-r--r-- 1 dexter dexter 3821 Aug  2  2021 devtv.gpg
  -rw-r--r-- 1 root   root   3896 Aug  2  2021 devtv.rar
  -rw-r--r-- 1 dexter dexter 3822 Aug  2  2021 secret.gpg
  ```
  - 1st column displays the permissions on the file, what different kind of users are allowed to do with the file
  - 2nd column is the owner of the file and group setting of it
  - 3rd column is the size in bytes (can be read easily with -h option)
  - 4th column is the date and time the file was modified
  - 5th column is the filename

- `mkdir` create a folder/directory
    - `-p` is an option that create any parent directory needed
- `rmdir` remove a folder/directory
    - folder/directory should be empty
- `cp <filetocopy> <wheretocopy>` copy
- `mv` move or rename
- `rm` remove file(s)

- wildcards:
    - `*` any character and any quantity
    - `?` one character

- `find` find files/folder
    - `find <directory> <findbywhat> <matching-pattern>`
    - findbywhat can be `-name`, `-size`, `date`, etc.
    ```bash
    find . -name "poe*"
    ```

- `sudo <command>`