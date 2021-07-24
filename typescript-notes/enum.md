# Enum


**reverse mappings** - numeric enum is compiled into an object that stores both forward and reverse mappings.
**`const` enums** - no code are generated at compile time, only comments.
**objects vs enums** - you may not need an enum when an object with `as const` cold suffice.

**Example 1**
```ts
enum UserResponse {
    no = 0,
    yes
}

function respond(receipient: string, message: UserResponse) {
    console.log(receipient, message)
}

respond('dexter', UserResponse.yes)
```

**Example 2 - Enums at compile time**

```ts
enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}

printImportant("ERROR", "This is a message")
```

**Example 3 - Const enums**
```ts
const enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
]
```

**Example 4 - Object vs Enums**

```ts
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

EDirection.Up;

ODirection.Up;

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requries an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run (dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);
```