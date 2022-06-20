```bash

# 1. use "git add <filename>" or use vscode to add your modifications to [staged changes]
# 2. use "git checkout -- ." to  or use vscode to discard all changes not done by you
# 3. copy the code below and paste in on your terminal. warning! don't forget to edit the [commit message] and the [push destination]

{
git config core.editor 'code --wait --new-window'
git config merge.tool vscode
git config mergetool.vscode.cmd 'code --wait $MERGED'
git config diff.tool vscode
git config difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'

# discard all modifications except for [staged changes]
git checkout -- .
# make sure stash is clean
git stash clear
# stash your [staged changes]
echo stashing...
git stash
echo stashing...
# now that your source code is free from changes, you can safely pull
echo pulling
git pull
# apply the code in your stash
echo applying stash...
git stash apply
echo mergetool
git mergetool
echo adding..
git add .
echo commit
git commit -m "tenth"
git push
}
```
