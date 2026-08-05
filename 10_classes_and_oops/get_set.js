class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        return this._email = value.toUpperCase();
    }

    get password(){
        return this._password.toUpperCase();
    }
    
    set password(value){
        this._password = value.toUpperCase();
    }
}

const Adnan =  new User("abc@xyx.com","abc")
console.log(Adnan.email);
