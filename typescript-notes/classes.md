# Classes

```ts
class Invoice {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
```

## Interfaces with Classes

**Keyword**: `implements`
**Use**: applies interface into a class

**interfaces/Hasformatter.ts**
```ts
export interface HasFormatter {
    format(): string;
}
```

**app.ts**
```ts
import { HasFormatter } from './interfaces/Hasformatter.js'
class Invoice implements HasFormatter {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
```

## Implementing an abstract tclass

**Keyword**: `abstract`
**Use**: 
* class use case: tells TS that the class will only serve as a model for other class but is not to be used to create an instance of itself.
* class method use case: tells TS that classes who inherited the class should define their own `method`.

```ts
abstract class User {
    static userCount:number = 0
    constructor(
        readonly name: string
    ) {
        User.userCount += 1
    }
    abstract showName(): void;
}

class Admin extends User {
    constructor(name: string) {
        super(name);
    }
    showName() {
        console.log(this.name)
    }
}

const user1 = new Admin('Dexter')
const user2 = new Admin('Ramos')

console.log(Admin.userCount)
```

## Controlling visibility with access modifiers

* `private` - properties and methods shall only be accessed within the class.

* `protected` - same with `private` but it scan be accessed by other classes who inherit its class.

* `public` - default JS object fields behavior.

JS does not support `private` members but developers use a workaround using `_`.

This will be added into the name (e.g. `this._name = name`). With this, it won't be included in the autocomplete features. But it can still be accessed.