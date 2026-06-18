
// -----------Prototype Method Making-----------------------

let heros = ['thor','spiderman']     //array

let heroPower ={                     //object
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}
// object prototype methods is accessible to everything
Object.prototype.krish = function(){
    console.log(`Krish is present in all objects`); 
}

// array prototype methods is only accessible to arrays
Array.prototype.heyKrish= function(){
    console.log(`krish says hello`);
}

// heroPower.krish()
// heroPower.heyKrish()

// heros.krish()
// heros.heyKrish()


// --------------------------------------------------------------

// INHERITANCE
const user = {
    username : 'chahi',
    email : 'chai@google.com'
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user


// modern syntax
// Object.setPrototypeof(teachingSupport,teacher)

// ---------------------------------------------------------

let anotherUsername = "chai          "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
'hitesh'.trueLength()
'krish         '.trueLength()
