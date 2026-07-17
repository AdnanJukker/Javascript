// for of 

// ["","",""] array of strings 
// [{},{},{}] array of objects 

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello JavaScript"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps 

const map = new Map()
map.set('IN',"India")
map.set('RS',"Russia")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(`${key}:-${value}`);
}

const myObj={
    game1 : 'nfs',
    game2 : 'rdr'
}

// for (const [key,value] of myObj) {
//     console.log(`${key}:-${value}`);
// } 