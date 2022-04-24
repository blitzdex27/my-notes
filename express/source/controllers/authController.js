const User = require("../models/User");
const jwt = require("jsonwebtoken");

//handle errors

const handlerErrors = (err) => {
  console.log(err.message, err.code);
  const errors = {};

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "that password is incorrect";
  }

  // duplicate error code
  if (err.code === 11000) {
    const { email } = err.keyValue;
    errors.email = `The email '${email}' is already registered.`;
  }
  if (err.message.includes("user validation failed")) {
    Object.entries(err.errors).forEach((error) => {
      errors[error[0]] = error[1].message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // save user to db
    const user = await User.create({ email, password });
    // create jwt token
    const token = createToken(user.id);
    // push jwt as cookie into the client
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
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
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.id });
  } catch (err) {
    const errors = handlerErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
