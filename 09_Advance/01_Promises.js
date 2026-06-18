const promiseOne = new Promise(function(resolve,reject){
    // Do an Aync task
    // crypto task
    // DB calls
    // network call
    setTimeout(()=> {
        console.log('Async is complete');
        resolve()
    },1000)
})

promiseOne.then(() => {
    console.log('Promise consumed')
})

// ----------------------------------------------

new Promise( function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

// ----------------------------------------------

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'krish', email: 'example@.com'})
    },1000)
}).then(function(user){
    console.log(user);
})

// ----------------------------------------------

const promiseFour = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:'krish', pass: '456123'})
        }else{
            reject('Something went wrong')
        }
    },1000)
})
.then( (user) => {
    console.log(user);
    return user.username    
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error); 
})
.finally(()=>{
    console.log('promise either resolved or rejected');
})

// ------------------------------------------------

// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username:'javascript', pass: '456123'})
//         }else{
//             reject('javascript missing')
//         }
//     },1000)
// })

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } 
    catch(error){
        console.log(error);
    }
}   

// consumePromiseFive()

// -------------------------------------------------------

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://randomuser.me//api')
//         const data =  await response.json()
//         console.log(data)
//     } catch(err) {
//         console.log(err);
//     }
// }

// getAllUsers()

// then and catch 

fetch('https://randomuser.me//api')
.then( (response)=> {
    return response.json()
})
.then( (data)=> {
    console.log(data);
    
})
.catch((error)=> {
    console.log(error);
})