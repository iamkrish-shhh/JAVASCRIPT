// ----------------------------TWO TYPES OF MEMORY----------------------------

// 1. Stack Memory => used for storing primitive datatypes(copy is stored in stack memory)

let Name = "Krish"
let anotherName = Name

console.log(Name); // Krish
console.log(anotherName); // Krish => copy of value is stored in anotherName, so it is independent of Name

// 2. Heap Memory => used for storing non-primitive datatypes(reference is stored in stack memory)

let username = {
    name: "krish",
    email: "anything@gmail.com"
}

let anotherUsername = username

anotherUsername.email = "krish@gmail.com"

console.log(username); // { name: 'krish', email: 'krish@gmail.com' } => both username and anotherUsername point to the same object in heap memory, so changes in one will reflect in the other
console.log(anotherUsername); // { name: 'krish', email: 'krish@gmail.com' }