## Configure GIT
```
git config --global user.name Alexandr Alakin
git config --global user.email alakinalexandr@gmail.com
git config --global core.editor vim
git config --global commit.verbose true
```

## Commit
`git commit --amend` — modify last commit

## Logs
`git log --oneline --graph --all --decorate`

## Show
`git show XXXXXXX:path/to/file` — show file content at specific commit, identified by hash (XXXXXXX)

## Undo commit
`git reset HEAD^` — undo last commit
