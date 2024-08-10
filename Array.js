/* iterating over arrays*/ /* Notes at last */ 
//for of loops
const arr=[1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const greetings= "Hello world!"
for (const greet of greetings) { 
    if (greet===" ") {
        // continue;    //skip the " " space and move to next char    
        // break;       //if " " , break and exit loop
    }
    // console.log(greet)
}

// Maps: remember the order of insertion and dont allow repeatation

const map= new Map()
map.set('IN', "india")
map.set('USA', "United States Of america")
map.set('SL', " Sri Lanka")
map.set('SL', " Sri Lanka") // this will be ignore

// console.log(map)

for (const [key,value] of map) {
// console.log(key, ":" ,value)
}
//
const myObject={
    game1: 'PUBG',
    game2: 'Candy crush',
    game3: 'Temple run',
    game4: 'Subway surfer',
}
// //  for of is not iterable on object
// for (const [key,value] of myObject) {
//  console.log(key,":", value)   
// }

// for in loop: to iterate over object
for (const key in myObject) {
    //  console.log(`${key} is ${myObject[key]}`)
    //  console.log( key, myObject[key])
}

// can forin loop iterate over array ? Yes.
// forin loop is not iterable on Map()
const Programming = ['js', 'rb','python', 'java', 'c', "cpp"]
for (const key in Programming) {
    // console.log(key)  
    // console.log(Programming[key]) 
    }

// forEach loop: it takes callback function , a functin without name
const coding=['HTML','js','REACT', 'rb','python', 'java', 'c', "cpp"]
coding.forEach(function (item){
    // console.log(item)
})
//using arrow function
// coding.forEach((value)=>console.log(value) )

function printMe(){
    // console.log(" first")
}
coding.forEach(printMe)

//
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

// 
const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
    // console.log(item.languageFileName)
})


/*Array: Notes */
/*
// 1. Creating Arrays
// Literal Notation:

let fruits = ['Apple', 'Banana', 'Orange'];

// Constructor:
let fruits = new Array('Apple', 'Banana', 'Orange');

// 2. Accessing Elements
// -Use indices to access elements, with the first element being at index 0:

console.log(fruits[0]); // 'Apple'

// 3. Modifying Elements
// - You can modify elements by assigning a new value to an index:
 
fruits[1] = 'Grapes'; // ['Apple', 'Grapes', 'Orange']

// 4. Array Methods
// Adding Elements:
// push(): Adds elements to the end.
fruits.push('Mango'); // ['Apple', 'Grapes', 'Orange', 'Mango']

// unshift(): Adds elements to the beginning.
fruits.unshift('Pineapple'); // ['Pineapple', 'Apple', 'Grapes', 'Orange', 'Mango']

// Removing Elements:
// pop(): Removes the last element.
fruits.pop(); // ['Pineapple', 'Apple', 'Grapes', 'Orange']

// shift(): Removes the first element. 
fruits.shift(); // ['Apple', 'Grapes', 'Orange']

// Finding Elements:
// indexOf(): Returns the first index of a value.
let index = fruits.indexOf('Orange'); // 2

// includes(): Checks if an array contains a value.
let hasBanana = fruits.includes('Banana'); // false

// Iterating Over Arrays:
// for loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop:
 
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach() method:
fruits.forEach(fruit => console.log(fruit));

// Array Methods for Transformation and Calculation:
// map(): Creates a new array with the results of calling a function for every array element.
 
let lengths = fruits.map(fruit => fruit.length);

// filter(): Creates a new array with all elements that pass a test.
let longFruits = fruits.filter(fruit => fruit.length > 5);

// reduce(): Applies a function against an accumulator and each element to reduce the array to a single value.
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

*/