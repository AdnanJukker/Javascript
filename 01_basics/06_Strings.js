const name = 'Adnan'
const count = 50

// console.log(name + count + 'value')

console.log(`hello my name is ${name} and my count is ${count} `)

const gameName = new String('Cyclops009') 

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.__proto__);
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('p'))

const newString =  gameName.substring(0, 7)

// console.log(newString)

const anotherString = gameName.slice(-8,3)

// console.log(anotherString)

const newString2 = '    Adnan   '

// console.log(newString2)
// console.log(newString2.trim())

const url = 'https://www.cyclops009.com/cyclops%20009'

console.log(url.replace('%20',"-"))

console.log(url.includes('Cyclops'))

console.log(gameName.split('0'))