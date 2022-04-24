# GraphQL Server

There will be a single graphql endpoint where all queries will be requested.

## Setup express server

```
npm install express
```

app.js

```js
const express = require('express');
const app = express();
app.listen(4000);
```

## Setup graphql

`graphql` package is a JavaScript implementation of graphql.

`express-graphql` is a package that helps interact and undestand graphql. Also provides easy way to create a server that rules with graphql api, by using it as middleware in a single route.

```
npm install graphql express-graphql
```

```js
const graphqlHTTP = require('express-graphql');

app.use('/graphql', graphqlHTTP({}));
```

options:

- `schema` will tell the express-graphql about our data and how our graph will look

./schema/schema.js

```js
const graphql = require('graphql');

const { GraphQLOjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: { type: BookType },
    args: {
      id: { type: GraphQLString },
    },
    resolve(parent, args) {
      // code to get data from db/ other source
    },
  },
});

// On frontend it will look like this
// book(id: '123') {
//     name
//     genre
// }

module.exports = new GraphQLSchema({
  query: RootQuery,
});
```

- `args` - the argument(s) to be defined by the client
- `resolve` - the function that will handle the query that will interact with database
  - `parent` - will be used to interact between data
  - `args` - args defined

app.js

```js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
```

### Finishing schema.js resolve

````js
      resolve(parent, args) {
        // code
        return _.find(books, { id: args.id });
      }

```
````
