# Generics

## Generics with Functions

Instead of specifying the parameter types, it will register the properties and/or types that has been passed.

**Example 1**

```ts
const addUID = <T>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 })
let docTwo = addUID('hello')

console.log(docOne.age);


```

However, with the approach from example 1, the parameter type can be anything and will not throw an error if another type or object with different properties are supplied.

We can solve this using `extends keyword`.

**Example 2**

```ts
const addUID = <T extends object>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 })
// let docTwo = addU/ID('hello')

console.log(docOne.age);


```

## Generics with Interaces

```ts
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> {
    uid: 1,
    resourceName: 'person',
    data: 'shion',
}

const docFour: Resource<object> {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
}

const docFive: Resource<string[]> {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['test', 'test2']
}
```