// function addTwoNumb(num1,num2){ //passing the parameters
//     console.log(num1+num2);
// }

// addTwoNumb(4,7) //passing the arguments

function addTwoNumb(num1,num2){ 
    // let result = num1+num2
    // return result
    return num1+num2
}
const result = addTwoNumb(4,7) 

// console.log("result: ",result);

function loginUserMsg(username = "Papita"){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg())

function calculateCartPrice(...num1){ //(...)rest operator
    return num1
}
// console.log(calculateCartPrice(100,200,400));

const user ={
    username : "Adnan",
    price : 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjects(user)
// handleObjects({
//     username : "Jatin",
//     price: 399
// })

const newArray = [100,200,400,500]

function returnSecondVal(getarray){
    return getarray[2]
}
// console.log(returnSecondVal(newArray));
console.log([100,200,4000,5000]);



