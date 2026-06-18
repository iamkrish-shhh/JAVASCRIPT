// const user = {
//     username : 'krish',
//     loginCount : 7,
//     signOut : true,

//     getUserDetails : function(){
//         console.log( 'Got your details from database');
//         console.log(`username : ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function notUser(username ,loginCount ,signOut){
    this.username = username
    this.loginCount = loginCount
    this.signOut = signOut

    this.greeting = function(){
        console.log(`welcome ${username}`);
    }

    return this
}

const userOne = new notUser('Aryan', 10, false)
const userTwo = new notUser('ChaiaurCode', 9 , false)

console.log(userOne.constructor);
// console.log(userTwo);

