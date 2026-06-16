// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai() {
    console.log(`DB CONNECTED`)
})();         //semicolon is imp to show the function has ended

// ise ham esse samjh skte hai 
// chai() => (function to be written)()

// Simple EEFE
((name) => {
    console.log(`DB CONNECTED TWICE ${name}`)
})("krish")