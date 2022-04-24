# MongoDB Tutorial by Net Ninja
Simple connection test.
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', function () {
    console.log('Connection has been made, now make fireworks...');
  })
  .on('error', function (error) {
    console.log('Connection error"', error);
  });
```

## Creating a model schema

```js
const mongoose, {Schema} = require('mongoose')

// Create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number,
})

const MarioChar = mongoose.model('mariochar', MarioCharSchema)

module.exports = MarioChar;
```

## Database structure

Database > Collection > Models (based on schema)
