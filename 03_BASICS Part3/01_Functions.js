function saymyName() {
    console.log("My name is Krish")
}

// saymyName() 

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);         //redefined the function, this will not return anything because we are using console.log instead of return
}

// if the function does not return anything, it will return undefined by default
// that undefined is being stored in the sum variable, so when we log the sum variable, it will log undefined
// const sum = addTwoNumbers(2, 3) 
// console.log(sum)




function loginUserMessage(username = "Sam altman") {
    if (username === undefined) {
        return "Please provide a username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

// -------------------------------------------------------------


function calculateCartPrice(...num) {  //rest method used
    return num
}

// console.log(calculateCartPrice(300,400,500))

// const user = {
//     username : "krish",
//     price : 5499
// }


function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject({
    username : "sam",
    price : 499
})

const newArray = [200,300,400,500]

function returnElement (Arr){
    console.log(Arr[1])
}

returnElement(newArray)

// ------------------------------------

console.log(addOne(5))  //gives no error because it is function declaration , which supports hoisting.

function addOne(num) {
    return num + 1
}

addTwo(7)  //gives error beacuse it is function expression.

const addTwo = function (num) {
    return num + 2
}