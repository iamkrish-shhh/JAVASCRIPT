//-------------------------DATES-------------------------
// let date = new Date();    //Date object
// console.log(date.toString()) //current date and time;
// console.log(date.toDateString()) //current date and time;
// console.log(date.toJSON()) //current date and time;

// let myCreateDate = new Date(2023, 0, 25)
// console.log(myCreateDate.toDateString()) //Wed Jan 25 2023

let myCreateDate2 = new Date(2023, 0, 25, 10, 30, 0)
console.log(myCreateDate2.toString()) //Wed Jan 25 2023 10:30:00

// let mytimeStamp = Date.now() //current timestamp in milliseconds from 1 Jan 1970 UTC
// console.log(mytimeStamp) //1700865600000

// console.log(myCreateDate2.getTime()) //1700866200000

// to get in seconds, we can divide by 1000
console.log(Date.now() / 1000) //1700866200

