"use strict";
class User {
    constructor(name) {
        this.name = name;
        User.userCount += 1;
    }
}
User.userCount = 0;
class Admin extends User {
    constructor(name) {
        super(name);
    }
    showName() {
        console.log(this.name);
    }
}
const user1 = new Admin('Dexter');
const user2 = new Admin('Ramos');
console.log(Admin.userCount);
