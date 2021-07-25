class User {
    static userCount:number = 0
    constructor(
        readonly name: string
    ) {
        User.userCount += 1
    }
}

const user1 = new User('Dexter')
const user2 = new User('Ramos')

console.log(User.userCount)