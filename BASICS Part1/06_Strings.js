// const name = "krish"
// const repos = 7

// console.log(name + repos); //not good method
// console.log(`My name is ${name} and i have ${repos} repos`); //string interpolation or template literals

// Creating a string Object
const gameName = new String("KrishThamke");
console.log(gameName);

console.log(gameName.length); //length of string
console.log(gameName[0]); //accessing character at index 0
console.log(gameName.indexOf("T")); //finding index of character "T"
console.log(gameName.toUpperCase()); //converting string to uppercase

const newStrin = "   Hello World!   ";
console.log(newStrin.trim()); //removing whitespace from both ends of the string

const nyName = "krish hkrns kih thhak ohr dinsn"
console.log(nyName.split(" ")); //splitting string into an array of substrings based on space
