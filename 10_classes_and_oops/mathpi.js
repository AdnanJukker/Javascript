const descriptor =  Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const phone = {
    name:"apple",
    price:999,
    isAvailable:true,
    orderPhone : function(){
        console.log("aint phone any ");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(phone,"name"));

Object.defineProperty(phone,'name',{
    // writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(phone,"name"));

for (let [key,value] of Object.entries(phone)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
        
    }
}
