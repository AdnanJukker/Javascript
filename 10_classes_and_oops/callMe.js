function SetUserName(username){
    // complex DB calls
    this.username = username;
    console.log("Called");
    
}

function createUser(username, email, password){
    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const adnan = new createUser("adnan", "adnan@fb.com", "123");

console.log(adnan);