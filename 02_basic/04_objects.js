const user = {}

user.id = "123abc"
user.name = "Adnan"
user.isLoggedIn = false

// console.log(user)

const regularUser = {
    email :"adnan@abc.com",
    fullname : {
        userFullName: {
            Fname : "Adnan",
            Lname : "Jukker"
        },
        
    }
}

// console.log(regularUser.fullname.userFullName.Fname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4= {5:"a",6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id :1,
        email:"abc@efg.com"
    },
    {
        id :1,
        email:"abc@efg.com"
    },
    {
        id :1,
        email:"abc@efg.com"
    },
]

users[1].email
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLogged'));





