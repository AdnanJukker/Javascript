// Immediately Invoked Function Expression(IIFE)

(function one(){
    //named iife
    console.log(`DB CONNECTED`);
})();
// ()() it is used for reducing the global scope variable pollution   

((name)=> {
    console.log(`DB TWO CONNECTED ${name}`);
    
})("adnan")