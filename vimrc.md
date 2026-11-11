```
set background=dark
set autoindent
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set relativenumber
set numberwidth=2
set scrolloff=5
set showcmd  " Show (partial) command in the last line of the screen.

" Jump to last position
augroup RestoreCursor
  autocmd!
  autocmd BufReadPost *
    \ if line("'\"") >= 1 && line("'\"") <= line("$") && &ft !~# 'commit'
    \ |   exe "normal! g`\""
    \ | endif
augroup END
```
