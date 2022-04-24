### Export keys

```
gpg2 --export-secret-keys > secret.gpg
```

### Import key to another computer

```
gpg2 --import /path/to/secret.gpg
```

### Clone git repo to another computer

```
git clone ssh://git@<your server's ip>:/home/git/pass-repo ~/.password-store
```

https://medium.com/@chasinglogic/the-definitive-guide-to-password-store-c337a8f023a1
