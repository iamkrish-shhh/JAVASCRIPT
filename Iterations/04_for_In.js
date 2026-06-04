// on OBJECT
// const myObj = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "Ruby"
// }

// for (const key in myObj) { 
//     console.log(`${key} for ${myObj[key]}`);
    
// }

// ----------------------------------------------------

// on ARRAY

// const myArr = ["js", "c++", "Ruby"]

// for (const key in myArr) {
//     // console.log(key);  //numbers dega => isiliye object bana tha
//     console.log(myArr[key]);
    
// }


// -------------------------------------------------------

// on MAPS

const map = new Map()
map.set(`IN` , "INDIA")
map.set(`USA` , "UNITES STATES OF AMERICA")
map.set(`FR` , "FRANCE")

for (const key in map) {
    console.log(key)
}

// not works on map