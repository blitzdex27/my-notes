"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.userCount += 1;
    }
    User.userCount = 0;
    return User;
}());
var user1 = new User('Dexter');
var user2 = new User('Ramos');
console.log(User.userCount);
