const marvel_heros = ['thor', 'Ironman', 'spiderman', 'hulk', 'captain america'];
const dc_heros = ['superman', 'batman', 'wonder woman'];

marvel_heros.push(dc_heros);   //pushes onto same array

// console.log(marvel_heros) 
// console.log(marvel_heros[5][2])

// const allHeros = marvel_heros.concat(dc_heros);    //creates a new array by merging two arrays
// console.log(allHeros)

const allHeros2 = [...marvel_heros, ...dc_heros]   //... => spread operator to merge two arrays
console.log(allHeros2)

const Array = [23,[5,6],[7,10],11]
console.log(Array.flat(Infinity))   //flat() method to flatten nested arrays, Infinity to flatten all levels of nesting

let score1 = 100
let score2 = 200
let score3 = 300

const arrayOfScores = [score1, score2, score3]  //we can also create an array of variables, which can be useful for storing related data together
console.log(arrayOfScores)