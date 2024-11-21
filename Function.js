// 19. Function and parameter in javascript

//
function addTwoNumbers(num1,num2){
     return num1+num2;
    // console.log("siraj") this will never execute

} 
// const result= addTwoNumbers(5,4)
// const result= addTwoNumbers(5,"4") // O:54
// const result= addTwoNumbers(5,null) // O:5 
// console.log("Result:", result) 

// 
//
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return ;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

// Higher order function: either take other func as arg, return a func or both.
// 30. Map, filter and reduce are the examples of HIGHER ORDER FUNCTION
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.filter((num)=>num>4);
// console.log(newNums)

// const newNums= myNums.filter((num)=>{
//         return num>4     // explicit return when curly braces
//         });

// Using forEach
// const newNums=[]
// myNums.forEach((num)=>{
    //     if(num>6)
    //         newNums.push(num)
// })
// console.log(newNums)

// map()
// const newNums=myNums.map((num)=>num+10)
// console.log(newNums)

// chaining

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums
//                 .map((num)=>num*10)
//                 .map((num)=>num+12)
//                 .filter((num)=>num>40)
// console.log(newNums);

// reduce()
const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval;
// },0)
// console.log(myTotal)

//reduce () using arrow function
const total= myNums.reduce((acc,currval)=> acc+currval, 0);
// console.log(total)

//
const shoppingCart=[
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "web dev Course",
        price: 4999
    },
    {
        itemName: "UI/UX Course",
        price: 2999
    },
    {
        itemName: "PYTHON Course",
        price: 8999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>(acc + item.price),0)
// what if omit intial value: first element is used as intital value 
//here, since the acc is not a number, this leads to error
console.log(priceToPay)

/*    */
// UDEMY : complete web dev- hitesh choudhary

/*48. Function, arrow function, THIS and context in javascript */

/*1. Write a function named `makeTea` that takes one parameter, 
`typeOfTea` and returns a string like 
`"Making green Tea"` when called with `"green tea"`.
Store the result in  a variable named `teaOrder` */

function makeTea(typeOfTea) {
    return (`Making ${typeOfTea}`)
}

let teaOrder= makeTea("greenTea;")
console.log(teaOrder);

/*2. Create a function name `orderTea` that takes one 
parameter, `teaType`. Inside this function, create another 
function named `confirmOrder` that returns a message like
`"Oder confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.*/

function orderTea(teaType) {
    function confirmOrder() {
        return ('Order confirmed for chai')
    }
     return confirmOrder()
 }

let orderConfirmation= orderTea()
// console.log(orderConfirmation);

/*3. Write an arrow function named `calculateTotal` that
takes two parameters: `price` and `quantity`. The
function should return the total cost by multiplying the
`price` and `quantity`. */

const calculateTotal= (price,quantity)=> price*quantity;

let totalCost= calculateTotal(2,5)
// console.log(totalCost);