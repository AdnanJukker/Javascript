const myNums = [1,2,3]

const myTotal= myNums.reduce((acc,currval)=>{
    console.log(`acc value: ${acc} and currval: ${currval}`);
    return acc+currval
},0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js',
        price: 2999
    },
    {
        itemName: 'py',
        price: 299
    },
    {
        itemName: 'mobiledev',
        price: 5999
    },
    {
        itemName: 'data science',
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
