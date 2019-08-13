## Configure GIT
```
git config --global user.name "Alexandr Alakin"
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

## Branches
`git branch -d|--delete <branch-name>` — delete local branch\
`git push <remote_name> --delete <branch_name>` — delete remote branch

## Use SSH
`git config remote.origin.url git@github.com:your_username/your_project.git` — use SSH\
`git config remote.origin.pushurl git@github.com:your_username/your_project.git` — use SSH only for push
