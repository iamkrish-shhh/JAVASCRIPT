// const myNum = [1,2,3,4,5]

// // const Total = myNum.reduce( (acc, currVal) => {
// //     console.log(`acc = ${acc} and currVal = ${currVal}`);
// //     return acc + currVal
// // },0)

// const Total = myNum.reduce( (acc, currVal) => acc + currVal,0)

// console.log(Total);

// ------------------------------------------------------------------

const shoppingCart = [
    {
        itemName : "C++ Course",
        price : 4999
    },
    {
        itemName : "java Course",
        price : 3999
    },
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 999,
    }
]

const total = shoppingCart.reduce((acc,item) => item.price + acc, 0)

console.log(total);


