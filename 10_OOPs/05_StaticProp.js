class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `159`
    }
}

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const krish = new user('chai')
// console.log(krish.createId())

const iPhone = new Teacher('iPhone', 'i@Phone.com')
iPhone.logMe()
console.log(iPhone.createId());

