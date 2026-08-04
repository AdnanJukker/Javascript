class user{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const stat = new user("Adnan")
// console.log(stat.createId());


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const phone =  new teacher("Adnan","i@gmail.com")
console.log(phone.createId());
