const coding = ['java','cpp','python','ruby','javascript']

// coding.forEach( function (val){
//     console.log(val);
    
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        langName:'javascript',
        langFileName:'js'
    },
    {
        langName:'c++',
        langFileName:'cpp'
    },
    {
        langName:'java',
        langFileName:'java'
    },
    {
        langName:'python',
        langFileName:'py'
    },
]

myCoding.forEach((item)=>{
    console.log(`lang name is ${item.langName}`);
})