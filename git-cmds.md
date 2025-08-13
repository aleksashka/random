## Configure GIT
```
git config --global user.name "Alexandr Alakin"
git config --global user.email alakinalexandr@gmail.com
git config --global core.editor vim
git config --global commit.verbose true
```

## GIT Aliases
```
git config --global alias.s 'status'
git config --global alias.l 'log --oneline --graph --decorate --all -10'
git config --global alias.la 'log --oneline --graph --decorate --all -10'
git config --global alias.d 'diff'
git config --global alias.dw 'diff --color-words="[^[:space:]]|([[:alnum:]]|UTF_8_GUARD)+"'
git config --global alias.dc 'diff --cached'
git config --global alias.dcw 'diff --cached --color-words="[^[:space:]]|([[:alnum:]]|UTF_8_GUARD)+"'
git config --global alias.a 'add -p'
git config --global alias.c 'commit'
```
`git d` source: https://www.youtube.com/watch?v=gDkvLxbA5ZE

## Commit
`git commit --amend` — modify last commit

## Logs
`git log --oneline --graph --all --decorate`

## Show
`git show XXXXXXX:path/to/file` — show file content at specific commit, identified by hash (XXXXXXX)

## Undo commit
`git reset HEAD^` — undo last commit

## Branches
`git branch -d|--delete <branch-name>` — delete local branch\
`git push <remote_name> --delete <branch_name>` — delete remote branch

## Use SSH
`git config remote.origin.url git@github.com:your_username/your_project.git` — use SSH\
`git config remote.origin.pushurl git@github.com:your_username/your_project.git` — use SSH only for push
