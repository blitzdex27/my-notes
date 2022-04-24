# Express server

Necessities:

- MongoDB (mongoose)
- GraphQL (express-graphql)
- Data validation(express-validator, validator)
- Hashing (bcrypt)
- Cookies (cookie-parser)
- Access token (express-jwt, jsonwebtoken)

## MongoDB

```
npm install mongoose
```

```js
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost', { dbName: 'myDB' })
  .then((result) => {
    console.log('Database connected');
  })
  .catch((e) => console.log(e.message));
```

or

```js
mongoose.connect('mongodb://localhost', { dbName: 'myDB' });

mongoose.connection.once('open', () => console.log('Database connected'));

mongoose.connection.on('error', (e) => console.log(e.message));
```

## Data validation

```js
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
});
```

## bcrypt

Hashing process:

- password
- add salt to password
- apply hashing algorithm
- hashed password

```
npm install bcrypt
```

```js
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
```

## Cookies

Stored data in user's browser. They are sent to the server for each request.

### Set Cookies

Example 1:

```js
app.get('/set-cookies', (req, res) => {
  res.setHeader('Set-Cookie', 'newUser=true');
  res.send('you got the cookies');
});
```

You can see this in your browser's developer tools, on the application tab, cookies.

Also, on the consoloe, you can enter `document.cookies` to return all cookies.

Example 2:

```js
app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, secure: true });
  res.cookie('age', 28, { httpOnly: true });

  res.send('you got the cookies');
});
```

\*Note:

- `maxAge` specifies the expiration of the cookie in milliseconds
- `secure` specifies if the cookie should only be applied on secured HTTP site (HTTPS)
- `httpOnly` specifies that this cookie cannot be accessed by JS, only through http protocol

Now, for the actual cookie cooking.

### Read Cookies

```
npm install cookie-parser
```

```js
const cookieParser = require(;cookie-parser)

app.use(cookieParser())

app.get("/read-cookies", (req, res) => {
  const cookies = req.cookies
  console.log(cookies)
});
```

## JSON Web Token

JWT contains encoded data about user to identify them. As long as they have this cookie, they are considered logged in and authenticated.

Process of JWT authentication:

- Log in from client
- Server match the credentials with DB
- Server creates JWT and send to client as cookie
- When client made a request, the JWT stored in the cookie will be included to the request header or data
- Server verifies the JWT to identify user
- If valid, the server will authenticate the client

### JWT Signing

`headers`.`payload`.`signature`

- `Headers` tells the server what type of signature is being used (meta)
- `Payload` used to identify the user (e.g. contains user id)
- `Signature` makes the token secure (like a stamp of authenticity)

#### Process

- `headers` and `payload` are encoded first
- `signature` is created by hashing the `headers` and `payload` with the `Secret` string

\*Note: `Secret` is the key to unlocking the JWT and the only way to verify the token

### Usage:

```
npm install jsonwebtoken
```

Creating token and sending it to browser as cookie

```js
const jwt = require('jsonwebtoken');

const handlerErrors = (err) => {
  console.log(err.message, err.code);
  const errors = {};

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'that email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'that password is incorrect';
  }

  // duplicate error code
  if (err.code === 11000) {
    const { email } = err.keyValue;
    errors.email = `The email '${email}' is already registered.`;
  }
  if (err.message.includes('user validation failed')) {
    Object.entries(err.errors).forEach((error) => {
      errors[error[0]] = error[1].message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60; // in seconds

// payload, secret, options
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge,
  });
};

// signup controller
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // save user to db
    const user = await User.create({ email, password });
    // create jwt token
    const token = createToken(user.id);
    // push jwt as cookie into the client
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.id });
  } catch (err) {
    const errors = handlerErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.id });
  } catch (err) {
    const errors = handlerErrors(err);
    res.status(400).json({ errors });
  }
};
```

Defining middleware that reads the jwt cookie and verifies it

```js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists and is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};
```

Use the middleware to protect a route

```js
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
```
