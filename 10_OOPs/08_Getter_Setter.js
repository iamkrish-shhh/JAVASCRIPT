// class user {
//     constructor (email, password){
//         this.email = email
//         this.password = password
//     }
    
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value 
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value
//     }
// }

// const krish = new user('krish@goofle.com','15948ankb')
// console.log(krish.password);

// console.log(krish.email);

// -----------------------------------------------------------
// using Properties(Old method) using function

// function user(email, password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = email
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = password
//         }
//     })

// }

// const krish = new user('@.com', '159')
// console.log(krish.email);

//-----------------------------------------------------------
// using Properties(Old method) using Object

const user = {
    _email : 'k@hf.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);
