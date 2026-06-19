class user {
    constructor(username){
        this.username = username
    }

    log(){
        console.log(`${this.username} LOGGED`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@gmail', '1584')

chai.addCourse()
chai.log()

const tea = new user('tea')

tea.log()

console.log(chai instanceof Teacher);
console.log(chai instanceof user);
