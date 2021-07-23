# TypeScript Configuration file [`tsconfig.json`]

## Initializing TypeScript configuration file

To initialize the TypeScript for our project, we need to enter the following on the terminal:

> tsc --init

The `tsconfig.json` will be created on your project root directory.

```
myProject
│   tsconfig.json
│
├───public
└───src
        index.ts

```

The recommended basic configuration file is like this:

```JSON
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "outDir": "./public",                           /* Redirect output structure to the directory. */
    "rootDir": "./src",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

    /* Strict Type-Checking Options */
    "strict": true,                                 /* Enable all strict type-checking options. */

    /* Module Resolution Options */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  },
  // only include .ts files inside src directory
  "include": ["src"]
}

```
