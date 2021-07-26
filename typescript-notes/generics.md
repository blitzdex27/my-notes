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


# TypeScript Documentation

A `generic` type, in contrast with `any` type, will accept any type while still preserving the type information
// Putting `<Type>` after the name of a decleration will make it a generic type

```ts
// A generic function
function identity<Type>(arg: Type): Type {
    return arg;
}
```
## Creating Generic Types

A generic function signature

```ts
let myIdentity1: <Type>(arg: Type) => Type = identity;
```
A generic object literal call signature

```ts
let myIdentity2: { <Type>(arg: Type): Type } = identity;
```

A generic interface

```ts
interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}
```

Using the created generic interface to serve as `type`

```ts
let myIdentity3: GenericIdentityFn<number> = identity
```

Explicitly defining `number` as the generic's argument will make its variable `Type` be set to `number`


## Generic Classes

Same shape with generic interface.

```ts
class GenericNumber<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
};
```
## Generic Constraints

Giving generic constraint using `extends` keyword

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length)
    return arg;
}
```

Constrained generic will no longer work over any and all types

```ts
// Throws an error since a number object has no length property
loggingIdentity(3);

// Valid arguments
loggingIdentity('hi')
loggingIdentity([1,2,3])
loggingIdentity({length: 12})
```

## Using Type Parameters in Generic Constraints

A type parameter can be used to constrain another type parameter of a generic

```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");

// throws an error since `m` is not a property of `x`
getProperty(x, "m");
```

## Using Class Types in Generics

Makes sure the parameter to be pass in is a class

```ts
function create<Type>(c: { new (): Type }): Type {
    return new c();
}
```

A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.

```ts
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```