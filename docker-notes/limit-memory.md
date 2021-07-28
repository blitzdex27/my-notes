# Limit docker windows app memory

To limit the memory that docker uses:

- Go to %USERPROFILE%
- Create a file named `.wslconfig` and put the following code:

```
[wsl2]
memory=900MB # Limits VM memory in WSL 2 to 4 GB
processors=1 # Makes the WSL 2 VM use two virtual processors
```

- Save and it's done.
