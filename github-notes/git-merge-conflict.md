# Merge conflict upon pull

## Content conflict
**Cause**: You performed a commit while your local repo is not updated with remote, and at the same time, the part of file you changed was also changed in the remote. Git cannot decide on what to do, so you have to manually modify the file mentioned.
> CONFLICT (content): Merge conflict in `<filename>`
> Automatic merge failed; fix conflicts and then commit the result.

### Clean (1 commit output)

```bash
- git merge --abort
- git reset HEAD~1
- git stash
- git pull
- git stash pop
- code . --> then choose on editor what to retain
- git commit -am "my commit"
- git push
- got stash clean
```

### Unclean (2 commits output)
```bash
code . --> then choose on editor what to retain
- git add .

- # you can do this
   git commit -m "my commit message"

- # or this
   git commit
- # then press "SHIFT + ZW"

- git push
```

## TBE
