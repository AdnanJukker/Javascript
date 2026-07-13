// Stack(Primitive Types),Heap(Non-Primitive Types)

let Myname = "Adnan"; //primitives are stored in stack memory
let anotherName = Myname;
anotherName = "Felix";

console.log(Myname);
console.log(anotherName);

let userOne = {                 //non-primitives are stored in heap memory //reference type
    email: "adnan@ex.com",
    upi : "adnan@ybl"
}
let userTwo = userOne;
console.log(userOne);