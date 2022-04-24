# Testing using mocha

Test our connection with the database:

- Creating records
- Reading records
- Updating records
- Deleting records

## Install mocha

```
npm install mocha
```

## Write test

```js
const assert = require('assert');

// Describe tests
describe('some demo tests', function () {
  // Create tests
  it('adds two numbers together', function () {
    assert(2 + 3 === 5);
  });
});
```

## Saving records test

_tree_

```
C:.
├───models
|   └───mariochar.js
├───node_modules
├───src
└───test
    └───connection.js
    └───saving_test.js
```

_connection.js_

```js
// const mocha = require('mocha')
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving records', function () {
  // Create tests
  it('Saves a record to the database', function (done) {
    const char = new MarioChar({
      name: 'Mario',
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
  // Next tests
});
```

_saving_test.js_

```js
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving records', function () {
  // Create tests
  it('Saves a record to the database', function (done) {
    const char = new MarioChar({
      name: 'Mario',
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
  // Next tests
});
```

- `Model.isNew` returns `true` if the collection is created locally but is not yet saved on the database. Returns `false` if it is saved to the database.

### Drop characters collections before each test
