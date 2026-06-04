// const score = 100
// console.log(score)

// const balance = new Number(1000)  //num object
// console.log(balance)

// console.log(score.toString()) //converting number to string
// console.log(typeof score.toString()) //checking type of the converted string

// console.log(score.toFixed(2)) //formatting number to 2 decimal places

// const number = 123.6
// console.log(number.toPrecision(4)) //formatting number to 4 significant digits

// const money = 1837273797
// console.log(money.toLocaleString("en-IN")) //formatting number with commas as thousands separators


// ----------------------MATHS-------------------------------

console.log(Math.abs(-5)) //absolute value
console.log(Math.round(4.3)) //rounding to nearest integer
console.log(Math.floor(4.7)) //rounding down to nearest integer
console.log(Math.ceil(4.2)) //rounding up to next integer
console.log(Math.max(1, 5, 3, 9)) //finding maximum value
console.log(Math.min(1, 5, 3, 9)) //finding minimum value
console.log(Math.random()) //generating random number between 0 and 1
console.log(Math.random() * 10) //generating random number between 0 and 10
console.log(Math.floor(Math.random() * 10)) //generating random integer between 0 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //generating random integer between min and max (inclusive)