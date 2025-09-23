const user = {
    username: "nischal",
    price: 200,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()

 console.log(this);
const greet = user.welcomeMessage;
//greet(); // this.username becomes undefined--it becomes global object
const func=function()
{
    let username="nis";
    console.log(this.username)
}
func()//this is also undefined
//arrow function-can do implicit return using this,doesnt have it's own this function..if we use {} have to use return explicitly
const addTwo = (num1, num2) => ( num1 + num2 )//argument and then add
console.log(addTwo(2,3))
const name= (num1, num2) => ( {username:"nis"} )
//Simple expressions (like num1 + num2) → can return implicitly, no {} needed

//Objects → must wrap in () if you want implicit return, otherwise JS thinks it's a block
console.log(name(2,3))
