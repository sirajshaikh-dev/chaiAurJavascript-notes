const PromiseOne= new Promise( function(resolve, reject){
        //Do an async task
        // DB calls, cryptography, network
        setTimeout(function(){
            console.log('Async task is complete')
        },1000)
})
PromiseOne.then(function(){
    console.log('promise reasolved')
})
new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('Async task2')
        resolve()
    },1000)
}).then(function(){
    console.log('async task 2 resolved')
})

const promiseThree= new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'siraj', email: 'siraj@example.com'})
    },1000)
})
promiseThree.then(function(user){   // accesing resolve data
    console.log(user)
})

const promiseFour= new Promise (function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({username:'siraj', password: '124'})
        }else{
            reject('ERROR: somthing went wrong')
        }
    },1000)
})
promiseFour
.then((user)=> {
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log('The promise is either resolved or rejected'))

// //
const promiseFive= new Promise (function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({username:'javascript', password: '124'})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive( ) {
    try {
        const response= await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers( ) {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }  
// }
// getAllUsers()

// above method using .then() & .catch()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=> console.log(data)
).catch((error)=>console.log(error)
)