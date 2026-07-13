//array
const arr = [1,2,3,4]
const arr2 = new Array(5,6,7,8,"Adnan","Dabeli")
console.log(arr2[5])

//array methods

// arr.push(5,6) //add element at the end of array
// arr.push(7,8,9) //add element at the end of array
// arr.pop()
// arr.unshift(0)
// arr.shift()

// const arr3 = arr.join()
// console.log(arr3)
// console.log(arr)

//slice and splice methods

console.log("A ",arr)

const myn1 = arr.slice(1,3) //slice(startIndex, endIndex) => it will return new array from startIndex to endIndex-1
console.log(myn1)

console.log("B ",arr)

const myn2 = arr.splice(1,3) //splice(startIndex, deleteCount) => it will remove elements from startIndex to deleteCount and return the removed elements    
console.log(myn2)
console.log("c",arr)