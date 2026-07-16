
// {} this is scope
let a = 300 //global scope

if(true){ //block scope
    let a = 10 
    const b = 20 
    c = 30
    console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scoping 

function one(){
    const username = "Adnan"

    function two(){
        const website = "abc.com"
        console.log(username)
    }
    // console.log(website);
    
    two()
}
// one()

if(true){
    const username = "adnan"
    if(username === "adnan"){
        const website = " abc.com"
        console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);


//hoisting 

console.log(addone(5));

function addone(num){
    return num +1
}

const addtwo = function(num){ //hoisting 
    return num + 2
}
console.log(addtwo(5));
