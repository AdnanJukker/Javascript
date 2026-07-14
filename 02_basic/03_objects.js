// singelton 
// Object.create

const mySim = Symbol("key1")

//object literals
const jsuser = {
    name : "Adnan",
    "Full name" : "Adnan Don",
    email : "abcd@eg.com",
    [mySim] : "mykey",
    location : "India",
    isLoggedIn : false,
    lastLogin: ["Monday","Saturday"]
}

console.log(jsuser.name);
console.log(jsuser["email"])
console.log(jsuser["Full name"]);
console.log(jsuser[mySim]);
console.log(jsuser["location"])
 
jsuser.location = "Udaipur"
console.log(jsuser["location"])
// Object.freeze(jsuser)
jsuser.name = "Jhon Doe"
console.log(jsuser)


jsuser.greeting = function(){
    console.log("Hello js user")
}
console.log(jsuser.greeting())

jsuser.greetingTwo = function(){
    console.log(`Hello js user,${this["Full name"]}`)
}
console.log(jsuser.greetingTwo())