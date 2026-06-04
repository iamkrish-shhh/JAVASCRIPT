// FOR OF

// on ARRAY

// const arr = [1 ,2 ,3 ,4 ,5 ]

// for (const element of arr) {
//     console.log(element);
// }

// MAPS   //same as object , but map keeps the order same with no duplicates

// on map

const map = new Map()
map.set(`IN` , "INDIA")
map.set(`USA` , "UNITES STATES OF AMERICA")
map.set(`FR` , "FRANCE")

console.log(map);
for(const [key,value] of map) {
    console.log(value);
}


// -----------------------------------------------

// on OBJECT

const obj = {
    name : "krish",
    id : 3386,
    add : "hfjrv",
}

for (const element of obj) {
    console.log(element);
    
}

// For of => not applicable to object

