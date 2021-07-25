# Generics

## Generics with Functions

Instead of specifying the parameter types, it will register the properties and/or types that has been passed.

Generics are a way to create functions and classes that define a behavior that can be reused across many different types while retaining the full information about that type.

Type are parsed when a function is called.

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


---------------------------------------
# TypeScript Essential Training

Use case:

> Whenever you see a place in your application that you seem to be copying the same code over and over again, and all you're doing differently in each version is simple changing which type you're using. Then that is a greate opportunity to reduce duplicated code into single generic function.

```ts
function clone<T>(value: T): T {
    let serialized = JSON.stringify(value)
    return JSON.parse(serialized);
}

clone('Hello')

clone(123)

var todo: Todo = {
    id: 1,
    name: 'Pick up',
    state: TodoState.Active
};

clone(todo)
```

## Generics with classes

```ts
var array: number[] = [1,2,3]
var array2: Array<number> = [1, 2, 3]

class KeyValuePair<TKey, TValue> {

    constructor (
        public key: TKey,
        public value: TValue
    ) {}
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');
```

Use to ensure that the types of values in 

```ts
class KeyValuePairPrinter<T, U>[] {

    constructor(private pairs: KeyValuePair<T, U>[]) {}

    print() {
        for ( let p of this.pairs ) {
            console.log(`${p.key}: ${p.value}`)
        }
    }
}

var printer = new KeyValuePairPrinter([pair1, pair3])
printer.print()
```