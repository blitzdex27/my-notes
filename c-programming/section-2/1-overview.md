# Overview

Windows
- C compiler (Cygwin)
- IDE's (Integrated Development Environment)
- Code::Blocks
- Visual Studio 
- steps:
    - install c/c++ extension
    - press ctrl + P
    - type in ">c/c++"
    - choose edit configuration (UI)
    - on compiler path: "c:/cygwin64/bin/gcc.exe"
    - on intellisense mode: "gcc-x64"

Mac
- C compiler (developer tools)
- IDE's (Integrated Development Environment)
- Code::Blocks does not work
- Visual Studio Codee
- XCode

Linux
- Compiler comes installed
- IDE's (integrated Development Environment)
- Visual Studio Code
- vi, gedit, compile from command line
- [link](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)


## Tell VSCode how to build

- go to command pallete (ctrl+shift+p)
- type in "tasks"
- choose "configure default build task"
- edit as needed:
```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build hello world",
            "type": "shell",
            "command": "gcc",
            "args": [
                "-g",
                "-o",
                "helloworld",
                "helloworld.c"
            ],
            "group": {
                "kind": "build",//task will run when ctrl+shift+b was pressed
                "isDefault": true
            }
        }
    ]
}
```

## Tell vscode how to debug

- go to command pallete (Ctrl + Shift + P)
- type in launch