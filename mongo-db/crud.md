## Saving record

_./models/author.js_

```js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Author = mongoose.model('author', authorSchema);

module.exports = Author;
```

_app.js_

```js
const Author = require('./models/author.js');

const newAuthor = new Author({
  name: 'Dexter',
  age: 28,
});
newAuthor.save();
```

Note:

- `newAuthor.save()` returns the object to be sent on the database, including the id.

Another method:

```js
try {
  const author = await Author.create({name: 'Dexter', age: 28})
}
catch (err) {
  
}


## Deleting record

Focus on 3 Mongoose methods:

- char.remove()
- MarioChar.remove()
- MarioChar.findOneAndRemove()

> `char` is the record found
> `MarioChar` is a mongoose.model object

## Updating record

Various Mongoose methods:

- char.update()
- MarioChar.update()
- MarioChar.findOneAndUpdate()

Update operators

```

```

```
