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
(Visit https://aka.ms/tsconfig.json to read more about this file)

```JSON
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",                                
    "module": "commonjs",                           
    "outDir": "./public",                           
    "rootDir": "./src",                             

    /* Strict Type-Checking Options */
    "strict": true,    
    "noImplicitAny": true,                       
    "strictNullChecks": true,                              

    /* Module Resolution Options */
    "esModuleInterop": true,                        

    /* Advanced Options */
    "skipLibCheck": true,                           
    "forceConsistentCasingInFileNames": true        
  },
  // only include .ts files inside src directory
  "include": ["src"]
}

```
