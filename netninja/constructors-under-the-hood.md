## Constructors under the hood

```js
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  // this method of adding method is not appropriate
  //   this.login = function () {
  //     console.log(this.email, 'has logged in');
  //   };
}
// add method into __proto__
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, 'has logged in');
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, 'has logged out');
};

// inheritance
function Admin(...args) {
  // inherit properties
  User.apply(this, args);
  // adding new property
  this.role = 'super admin';
}
// inherit methods
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {
  // delete code
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('ryu2@ninjas.com', 'Ryu2');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

console.log(userOne);
userTwo.login();
```
