"use strict";
// A `generic` type, in contrast with `any` type, will accept any type while still preserving the type information
// Putting `<Type>` after the name of a decleration will make it a generic type
// A generic function
function identity(arg) {
    return arg;
}
// ## Creating Generic Types
// A generic function signature
let myIdentity1 = identity;
// A generic object literal call signature
let myIdentity2 = identity;
// Using the created generic interface to serve as `type`
// Explicitly defining `number` as the generic's argument will make its variable `Type` be set to `number`
let myIdentity3 = identity;
/*-----------------------------------
--- Generic Classes */
// Same shape with generic interface.
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// Constrained generic will no longer work over any and all types
// Throws an error since a number object has no length property
// loggingIdentity(3);
// Valid arguments
loggingIdentity('hi');
loggingIdentity([1, 2, 3]);
loggingIdentity({ length: 12 });
/*-------------------------------
---Using Type Parameters in Generic Constraints */
// A type parameter can be used to constrain another type parameter of a generic
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// throws an error since `m` is not a property of `x`
// getProperty(x, "m");
/*---------------------------------------
----Using Class Types in Generics */
// Makes sure the parameter to be pass in is a class
function create(c) {
    return new c();
}
// A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
