// for 

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("five is best number");
    }
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop ${j}`); 
    // console.log(i+'*'+j+'='+i*j);
    }
}

let myArr = ['flash','ironman','batman']
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`the value of i is ${i}`);
    
    
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`the value of i is ${i}`);
    
    
}
