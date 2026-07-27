//random color generate

const randomColor = function(){
    const hex = '0123456ABCDEF';
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color += [Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId
const startChangingColor= function(){
    if(!intervalId){
    intervalId = setInterval(changeBgc,1000);

    }
    function changeBgc(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor= function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);

console.log(randomColor());