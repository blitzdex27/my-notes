# Tuples

Array-like object, which can use array methods.

The types of data inside a tuple are fixed once initialized.

```ts
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];

```