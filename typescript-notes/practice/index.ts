abstract class User {
    static userCount:number = 0
    constructor(
        readonly name: string,
 
    ) {
        User.userCount += 1
        

    }
    abstract showName(): void;
}

// class Admin extends User {
//     constructor(name: string) {
//         super(name);
//     }
//     showName() {
//         console.log(this.name)
//     }
// }

// const user1 = new Admin('Dexter')
// const user2 = new Admin('Ramos')

// // console.log(Admin.userCount)