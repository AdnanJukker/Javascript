let myDate = new Date("01 03 2002")
console.log(myDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString())
console.log(myDate.getTime())

console.log(myDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))