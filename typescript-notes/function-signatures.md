# Function Signatures

```ts
// unsignatured function
let greeting: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(name, greeting);
};

// example 2 - it should return number no matter
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action == "add") {
    return (numOne = numTwo);
  } else {
    return numOne - numTwo;
  }
};

// example 3 - type alias can be used together with function signature
let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
```
