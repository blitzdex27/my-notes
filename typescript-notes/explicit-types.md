```typescript
/*-----------------------------
--- explicit types */
let character: string;
let age: number;
let isLoggedIn: boolean;

/*-----------------------------
--- arrays */
let ninjas: string[];
let numbers: number[];
let bools: boolean[];

/*-----------------------------
--- union types */
let strOrNum: (string | number | boolean)[];
let uid: string | number;

/*-----------------------------
--- objects */
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

// ninjaTwo = {}
// ninjaTwo = []
ninjaTwo = { name: "mario", age: 20, beltColour: "black" };
```
