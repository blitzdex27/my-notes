# Function basics

```ts
let greet: Function;

//greet = 'hello';

greet = () => {
  console.log("hello, again");
};

/* -------------------------------------------------------
----- Parameter types - required, optional, and default */

const add = (
  a: number,
  b: number,
  c?: number | string,
  d: number = 10
): void => {
  console.log(a + b);
  console.log(c);
  console.log(d);
};

add(5, 10);

/* -------------------------------------------------------
----- Explicitly specifying return type */
const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
```
