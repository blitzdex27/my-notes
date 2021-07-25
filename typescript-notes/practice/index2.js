class User {
    
    constructor (name) {
        this.name = name
    }
    showName() {
        console.log(this.name)
    }
    private returnThis() {
        return this.name
    }
    static returnThis2() {
        return this
    }
}

class Admin extends User {
    constructor(...args) {
        super(...args)

    }
}

const admin1 = new Admin('dexter')

console.log(Admin.returnThis2())