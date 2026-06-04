const userEmail = "kris#ai"

if( userEmail ) {
    console.log("Got Your Email");
}else {
    console.log("Rewrite your email");   
}


// ----------------------FALSY VALUES-------------------
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


// // ----------------------TRUTHY VALUES---------------
// "0" , "False" , " ", [] , {} , function(){} , everything in Quotes

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}


// -----NULLISH COALESCING OPERATOR (??) : null undefined--------
// The Nullish Coalescing Operator (??) is used to provide a default value only when the left side is null or undefined.


let val
val = 5 ?? 17       //5

val = null ?? 17    //17

val = undefined ?? 17    //17

val = null ?? 17 ?? 58      //17

val = null ?? undefined ?? 58      //58

console.log(val);



// -----------TERNIARY OPERATOR (?)-------------------------
// The Ternary Operator (? :) is a shorthand way of writing an if...else statement.

// condition ? True : False

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");




