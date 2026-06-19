// // ES6
// // Modern Syntax
// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     capitalize(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new user('chai', 'chai!google', '123')
// console.log(chai.encryptPassword());
// console.log(chai.capitalize());

// behind the scene

function user(username, email, password){     //acts as constructor
    this.username = username
    this.email = email
    this.password = password
}

// using prototypes to create method
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.capitalize = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new user('tea', 'chai!google', '123')
console.log(tea.encryptPassword());
console.log(tea.capitalize());