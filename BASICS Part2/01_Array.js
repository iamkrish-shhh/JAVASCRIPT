const myArr = [1, 3, "jbf", true, null, undefined]
// console.log(myArr);

// // Arr Methods

// myArr.push("BMW") //adds new item at the end of the array
// console.log(myArr);
// myArr.unshift("Audi") //adds new item at the beginning of the array
// console.log(myArr);
// myArr.shift() //removes the first item of the array
// console.log(myArr);

// const newArr = myArr.join() //converts to string
// console.log(myArr);
// console.log(newArr); 

console.log(myArr); 

console.log(myArr.slice(1, 4)); //returns a new array with the selected elements (from index 1 to 3)
console.log(myArr);

console.log(myArr.splice(1, 3)); //returns a new array with the removed elements (from index 1 to 3) and modifies the original array
console.log(myArr);