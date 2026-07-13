const marvel_heroes = ["ironman", "spiderman", "hulk", "thor", "captain america"];
const dc_heroes = ["batman", "superman", "wonder woman", "flash", "aquaman"];

// Concatenating two arrays
// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log("All Heroes:", all_heroes);
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,8,[9,10]]]
const flat_array = another_array.flat(Infinity) //flat(depth) => it will flatten the array to the specified depth, Infinity means it will flatten all levels of nested  
console.log(flat_array)

console.log(Array.isArray("Adnan"))
console.log(Array.from("Adnan"))
console.log(Array.from({name: "Adnan"})) //interesting 

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))

