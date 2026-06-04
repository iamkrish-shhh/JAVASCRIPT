// ---------------------------THIS KEYWORD-------------------------
const user = {                  
    username : "krish",
    price : 584,

    welcomeMessage : function() {
        console.log(`${this.username} welcome to website`)
        console.log(this)    //current context => username , price , welcomeMessage
    }

}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this)   //{} => empty object



// function chai() {
//     let username = "krish"
//     console.log(this.username)       //THIS works only on object not in function
// }

// chai()

// -------------------------------------------------------------

// const chai = () => {
//     let username = "krish"
//     console.log(this.username)         //THIS works only on object not in function
// }

// chai()

 
//------------------------------------------------------------

// explicit return keyword is used
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// // implicit return 
// const addThree = (num1,num2,num3) =>  (num1 + num2 + num3)

const addThree = (num1,num2,num3) =>  ({username : "krish"})

console.log(addThree(5,6))




