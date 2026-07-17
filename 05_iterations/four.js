const myObj ={
    js : 'javaScript',
    cpp : 'c++',
    rb : 'ruby',
    swift:'swift by apple'
}
for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const prog = [1,2,3,4,5,6]

for (const key in prog) {
    console.log(`${key} is for ${prog[key]}`);
}