const user = {
    username:"Adnan",
    loginCount : 9,
    signIn : true,  
    getUserDetails: function(){
       console.log(`Username = ${this.username}`);
       
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,signIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signIn = signIn;

    // return this
}

const userOne = new User("Adnan",9,false)
const userTwo = new User("Yash",11,false)

console.log(userOne);
console.log(userTwo);


