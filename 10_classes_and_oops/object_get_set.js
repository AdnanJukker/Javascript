const User={
    _email : "xyx@abc.com",
    _password : "123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const Adnan = Object.create(User)
console.log(Adnan.email);
