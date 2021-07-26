// A `generic` type, in contrast with `any` type, will accept any type while still preserving the type information
// Putting `<Type>` after the name of a decleration will make it a generic type

// A generic function
function identity<Type>(arg: Type): Type {
    return arg;
}

// ## Creating Generic Types

// A generic function signature
let myIdentity1: <Type>(arg: Type) => Type = identity;

// A generic object literal call signature
let myIdentity2: { <Type>(arg: Type): Type } = identity;

// A generic interface
interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

// Using the created generic interface to serve as `type`
// Explicitly defining `number` as the generic's argument will make its variable `Type` be set to `number`
let myIdentity3: GenericIdentityFn<number> = identity

/*-----------------------------------
--- Generic Classes */

// Same shape with generic interface.

class GenericNumber<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
};

/*----------------------------------
--- Generic Constraints */

// Giving generic constraint using `extends` keyword

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length)
    return arg;
}

// Constrained generic will no longer work over any and all types

// Throws an error since a number object has no length property
// loggingIdentity(3);

// Valid arguments
loggingIdentity('hi')
loggingIdentity([1,2,3])
loggingIdentity({length: 12})

/*-------------------------------
---Using Type Parameters in Generic Constraints */

// A type parameter can be used to constrain another type parameter of a generic

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");

// throws an error since `m` is not a property of `x`
// getProperty(x, "m");


/*---------------------------------------
----Using Class Types in Generics */

// Makes sure the parameter to be pass in is a class
function create<Type>(c: { new (): Type }): Type {
    return new c();
}

// A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.

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