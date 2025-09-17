function price(...num1)
{
    return num1
}
console.log(price(100,200,300))//one parameter but multiple values are being printed
//object as parameter
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
