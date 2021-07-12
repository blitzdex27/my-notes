# Prototype

```JavaScript
function User(email, age) {
  this.email = email;
  this.age = age;
  this.isLoggedIn = false;
}

User.prototype.login = function () {
  this.isLoggedIn = true;
  console.log(this.email, "has logged in", this.isLoggedIn);
};

// Object Inheritance
function Admin(...args) {
    User.apply(this, args)
    // exclusive to Admin object
    this.role = 'super admin'
}

// Object prototype inheritance
Admin.prototype = Object.create(User.prototype)

// Exclusive method for admin
Admin.prototype.deleteUser = function(u) {
    //some delete algorithm
}

const userOne = new User("blitzdex27@gmail.com", 28);
const admin = new Admin("dexter_sramos27@outlook.com", 28)

console.log(userOne);
userOne.login();

console.log(admin)
```
