// const tinderuser = new object()  //Singleton Object => only one instance of the object can be created, we cannot create multiple instances of the object
const tinderUser = {}               //Non singleton Object

// Both Create an empty object

tinderUser.id = '159753'
tinderUser.name = "krish"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        firstName : "krish",
        lastName : "Thamke"
    }
}

console.log(regularUser.fullname)

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key3 : "value3",
    key4 : "value4"
}

// ---------------------OBJECT MERGING---------------------
// const obj3 = Obj1.concat(obj2) // This will not work because objects do not have a concat method

// const obj3 = Object.assign({}, obj1, obj2) // This will also work because we are using the Object.assign method to merge the two objects

// console.log(obj3 === obj1) // This will return false because obj3 is a new object that has been created by merging obj1 and obj2, it is not the same object as obj1

const obj3 = {...obj1, ...obj2} // This will work because we are using the spread operator to merge the two objects
console.log(obj3)




// ---------------------OBJECT METHODS---------------------

console.log(Object.keys(obj3)) // This will return an array of the keys of the object
console.log(Object.values(obj3)) // This will return an array of the values of the object
console.log(Object.entries(obj3)) // This will return an array of the key-value pairs of the object

console.log(obj3.hasOwnProperty('key1')) // This will return true because obj3 has the property 'key1'



// ---------------------OBJECT DESTRUCTURING---------------------


const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "krish"
}

const {courseInstructor} = course // This will create a new variable called courseInstructor and assign it the value of the courseInstructor property of the course object

console.log(courseInstructor)

const {courseInstructor: instructor} = course  // This will create a new variable called instructor and assign it the value of the courseInstructor property of the course object

console.log(instructor)



