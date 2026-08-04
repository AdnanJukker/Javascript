class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    enryptPass(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const sup = new user("adnan","adnan@abc.com","123")

console.log(sup.enryptPass());
console.log(sup.changeUsername());
