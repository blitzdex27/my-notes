# Modules

## Internal vs. External Module

* Both encourage encapsulation and organization
* Different implementations:
    - Internal - namespace function scope
    - External - file scope
* Both require components to be exported and imported.

## TS Module Import Syntaxes

* Requrie (like Node.js)
* ECMAScript 2015 (ECMAScript Standard)
* Functionally equivalent (generates same code)

## Internal Module Approach (Organizing code with namespaces)

Namespaces are an excellent way to avoid naming collisions and refer to a group of types as one organizational unit.

```ts
namespace TodoApp.Model {

    export interface Todo {
        id: number;
        name: string;
        state: TodoState;
    }
}

namespace DataAccess {

    import Model = TodoApp.Model
    import Todo = Model.Todo

    export interface ITodoService {
        add(todo: Todo): Todo;
    }
}
```

**Immediately Invoked Function Expression (IIFE)**

```js
(function (name) { 
    console.log(`Hello ${name}`) 
    })('Dexter')

```

In TS this is used to create the equivalent blocks of code for a namespace

TypeScript code:

```ts
namespace x {
    export const num1 = 1;
    const num2 = 2;
    console.log(num1)
}
```

JavaScript equivalent code:

```js
var x;
(function (x) {
    x.num1 = 1;
    const num2 = 2;
    console.log(x.num1);
})(x || (x = {}));
```

## External Module

### Importing module

Require syntax
```ts
import Model = require('./Model')
```

ECMAScript 2015 syntax
```ts
// import every object and store it in Model variable
import * as Model from './Model'
// or import specific object
import { Todo } from './Model'
```

### Module loader

Define inside `tsconfig.json`

```JSON
{
    "compilerOptions": {
        "module": "common.js"
    }
}
```

**System.js**

* Attempts to implement the proposed ECMAScript specification
* Provides a temporary fix until native browser support is available
* Supports ECMAScript 2015 syntax

To use system.js:

* `npm install systemjs` or use the cdn for system.js
* On your index.html, include the system.js file on the script
    ```html
    <script type="text/javascript" src="pathToSystemJS"></script>
    ```
* On your index.html again, include these scripts:
    ```html
    <script type="text/javascript">
        System.defaultJSExtensions = true
        System.import('app')
    ```
