const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);

// Object.defineProperty(Math,'PI',{
//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const chai = {
    name: 'ginger chai',
    price: '250',
    isAvailable : true
}

// console.log(Object.getOwnPropertyDescriptor(chai,'price'));

Object.defineProperty(chai,'price',{
    writable: false,
    enumerable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai,'price'));

Object.defineProperty(chai, 'price', {
    writable: true
})