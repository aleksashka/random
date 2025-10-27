## Speeding up VS Code configuration

---
Run in Windows CMD to install a list of extensions
```batch
REM To list currently installed extensions:
REM "%UserProfile%\AppData\Local\Programs\Microsoft VS Code\bin\code" --list-extensions

set exts=^
pkief.material-icon-theme ^
ms-python.python ^
ms-python.black-formatter ^
redhat.vscode-yaml ^
wholroyd.jinja ^
vscodevim.vim

for %E in (%exts%) do (
    "%UserProfile%\AppData\Local\Programs\Microsoft VS Code\bin\code" --install-extension %E --force
)
```

---

`settings.json` (`Ctrl+,` > type `set` > Change `ui` to `json` > `Ctrl+,` > Replace with json below)
```json
{
    "editor.fontSize": 20,
    "terminal.integrated.fontSize": 20,
    "editor.formatOnSave": true,
    "editor.lineNumbers": "relative",
    "explorer.confirmDragAndDrop": false,
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "redhat.telemetry.enabled": false,
    "workbench.iconTheme": "material-icon-theme",
    "workbench.settings.editor": "json"
}
```
