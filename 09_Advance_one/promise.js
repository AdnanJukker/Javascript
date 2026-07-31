const promiseOne = new Promise((resolve,request)=>{
    setTimeout(()=>{
        console.log(`Async task is Compeleted`);
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("Task Compeleted");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task compeleted");
        resolve();
    },1000)    
}).then(()=>{
    console.log("resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:"Adnan",email:"adnan@example.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})

const promieFour = new Promise((resolve,reject)=>{
    let error = true;
    setTimeout(()=>{
        if(!error){
            resolve({userName:"Adnan",Pass:'123'})
        }else{
            reject(`ERROR: Something went wrong`)
        }
    },1000)
})

promieFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{console.log(`The promise is either is resolved or rejected`);
})


const promieFive = new Promise((resolve,reject)=>{
    let error = true;
    setTimeout(()=>{
        if(!error){
            resolve({userName:"JavaScript",Pass:'123'})
        }else{
            reject(`ERROR: JS went wrong`)
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promieFive
        console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUsers();

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{
    console.log(data);
 })
 .catch((error)=> console.log(error))