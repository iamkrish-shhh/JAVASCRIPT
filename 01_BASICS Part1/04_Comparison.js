// console.log(3 > 2); // true
// console.log(3 < 2); // false
// console.log(3 >= 2); // true
// console.log(3 <= 2); // false
// console.log(3 == 2); // false
// console.log(3 != 2); // true

console.log("3" > 3); // false
console.log("3" < 3); // false

// === vs ==

console.log(3 == "3"); // true => only checks value, not type
console.log(3 === "3"); // false => checks value and type both


// -------------------TYPES OF DATATYPE----------------------------------
// PRIMITIVE DATATYPES
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol       
// 7. BigInt

const id = Symbol("1234") // unique identifier
console.log(id);
console.log(typeof id);

const bigNumber = BigInt(1234567890123456789012345678901234567890)
console.log(bigNumber);
console.log(typeof bigNumber);

// NON-PRIMITIVE DATATYPES
// 1. Object

let object = {
    name: "krish",
    age: 24,
    isMarried: false
}
// 2. Array
let array = [1, 2, 3, 4, 5]

// 3. Function

const greet = function() {
    console.log("Hello, World!");
}

console.log(typeof greet);