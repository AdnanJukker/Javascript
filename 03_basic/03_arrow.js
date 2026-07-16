const user = {
    username : "Adnan",
    price : 999,

    welcomeMsg :function(){
        console.log(`${this.username}, Welcome to my Website`);
        console.log(this);
        
        
    } 
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this); //{}

// function one(){
//     let username = "Adnan"
//     console.log(this.username); //undefined
    
// }
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
 */
// one()


// const one = function(){
//     let username = "adnan"
//     console.log(this.username);//undefined
// }
// one()

const one = () => {  //arrow function
    let username = "adnan"
    console.log(this.username);//undefined
}
// one()

// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addtwo = (num1,num2) =>  num1 + num2  //implicit return 
const addtwo = (num1,num2) =>  (num1 + num2)
console.log(addtwo(5,10));


