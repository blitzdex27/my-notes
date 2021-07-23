# Custom Types

## Interfaces

**TL;DR:**

Interface acts as a contract that describes the data and the behaviors that the object exposes for others to interact with

- _Required_ if prop is defined
- _Not Required_ if prop has `?` at the end.

### Defining custom types with interfaces

Defining:

```TypeScript
interface MyCustomType {
    prop1: string;
    prop2: boolean;
    prop3?: number;
}
```

Note: `prop3` is an optional property.

Assigning:

```TypeScript
const x: myCustomType = {
    prop1: 'Hello',
    prop2: true
}
```

or

```TypeScript
const x = <myCustomType>{
    prop1: 'Hello',
    prop2: true
}
```

### Using interfaces to describe functions

Defining:

```typescript
interface jQuery {
  (selector: string): HTMLElement;
  version: number;
}
```

Assigning:

```typescript
let $ = <jQuery>function (selector) {
  // DOM element
};
$.version = 1.12;
```

### Anonymous type declaration

```TypeScript
const toDo: { name:string }

// Accepting objects with specific property
let stringOrArray: { length: number }

// -> instead of doing this if you will later just use length prop
let stringOrArray: { any[] | string }
```

## Enum

**Defining**

```TypeScript
enum ToDoState {
  New = 1,
  Active,
  Complete,
  Deleted,
}
```

**Assigning**

```TypeScript
interface Todo {
  name: string;
  state: ToDoState;
}
```
