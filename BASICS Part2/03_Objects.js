// singleton
// object.create

// Object
const mySum = Symbol('Key1')

const user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    email : "krish@google.com",
    [mySum]: 'mySum1',
    courses: ['html', 'css', 'js'],
    wife: null
}

// console.log(user[mySum])


// user.email = "krish@microsoft.com"
// console.log(user.email)

// Object.freeze(user) //freeze the object, we cannot change any value in the object
// user.email = "krish@apple.com"

user.greeting = function() {
    console.log(`welcome ${this.name}`)
}

console.log(user.greeting())
