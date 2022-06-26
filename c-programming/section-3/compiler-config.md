# Configuring the compiler

## configure c/c++

./vscode/c_cpp_properties.json

```json
{
  "configurations": [
    {
      "name": "Win32",
      "includePath": ["${workspaceFolder}/**"],
      "defines": ["_DEBUG", "UNICODE", "_UNICODE"],
      "windowsSdkVersion": "10.0.19041.0",
      "compilerPath": "C:/cygwin64/bin/gcc.exe",
      "cStandard": "c11",
      "cppStandard": "c++11",
      "intelliSenseMode": "gcc-x64"
    }
  ],
  "version": 4
}
```

If you are having errors such as the gcc.exe path cannot be resolve:

disable automatic update

- open command pallete and type in settings
- choose Open Settings
- search for "update mode"
- set it to manual

install extension

- go here https://github.com/microsoft/vscode-cpptools/releases/tag/1.2.1
- download based on your system
- then on vscode, run command pallete
- type in: install from vsix
- you will will have to respond to the promps of vscode
- and your vscode will reload a few times

## Tell VSCode how to build

- go to command pallete (ctrl+shift+p)
- type in "tasks"
- choose "configure default build task"
- edit as needed:

./.vscode/tasks.json

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "hello world",
      "type": "shell",
      "command": "gcc",
      "args": [
        "-g", // global
        "-o", // to create an object file
        "helloworld", // name of executable
        "helloworld.c" // source file(s)
      ],
      "group": {
        "kind": "build", // this process will run if you press ctrl+shift+v
        "isDefault": true
      }
    }
  ]
}
```

## Tell vscode how to debug

- install c/c++ extension pack
- go to View > Add Configuration (make sure you are in a file with .c extension)
- select "C++ (GDB/LLDB)"
- launch.json will be created in your .vscode folder

./.vscode/launch.json

```json
{
  "version": "0.2.0",
  "configurations": []
}
```

- click inside the array of configurations property
- Add configuration from the View menu
- then choose "C/C++: gdb (launch)"
- then modify some values

./.vscode/launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(gdb) Launch",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/helloworld.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "miDebuggerPath": "C:/cygwin64/bin/gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ]
    }
  ]
}
```
