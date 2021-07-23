# TypeScript Notes

TypeScript is a superset of JavaScript that adds the concept of static typing to core features of JS.

## Terms

- Traspilers - tools that transforms code from one language into another

**Requirement:** text editor and _TypeScript compiler_

## TS Compiler Installation

Install command-line interface (CLI) (via npm)

> npm install -g typescript

or

> npm install typescript

## JavaScript 6 Data Types

- bool
- number
- string
- null / undefined
- object
- function object
- array object

## How to use

1. Install typescript via `npm install typescript` or `npm install -g typescript`.
2. Create `tsconfig.json` on project root directory, put these lines of codes for starters:
   ```JSON
   {
       "compilerOptions": {
           "target": "es6"
       }
   }
   ```
3. Create files with `.ts` extensions instead of `.js`. The `.js` files will be created automatically.
4. On the terminal, enter the following and you are ready to go:
   ```bash
   tsc -w
   ```
