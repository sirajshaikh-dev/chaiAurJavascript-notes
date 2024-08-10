// const instaUser=new object()// singleton object
const instaUser={}
instaUser.id="123asf"
instaUser.name= "karan"
instaUser.isLoggedIn= false
// console.log(instaUser)

const regularUser={
email: "abc@gmail.com",
fullname: {
    userfullname:{
        firstname: "siraj",
        lastname: "shaikh"
    }
}
}
// console.log(regularUser.fullname.userfullname.firstname)

//Assigning object
const obj1= {
    1: "a",
    2: "b",
    3: "c"
}
const obj2= {
    4: "A",
    5: "B",
    6: "C"
}

/*const obj3={obj1,obj2} "invalid "*/
const obj3= Object.assign({}, obj1,obj2)
const obj4= {...obj1,...obj2} // spread operator
// console.log(obj4) 

// Object.keys and Object.values
const users =[
    {},
    {},
    {},
    {},
]
users[1].email
// console.log(instaUser)
// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

// console.log(instaUser.hasOwnProperty('isLoggedIn'))

//video no.18: object de-structure and JSON API

const course={
    coursename: "javascript",
    price:'9999',
    courseInstructor: "Hitesh Choudhary"
}

//accesing values
course.courseInstructor;
//another way
const {courseInstructor}=course
// console.log(courseInstructor)

// renaming is also possible with this way
const {courseInstructor: instructor}=course
// console.log(instructor)

/* react object de-structure 
const navbar =({company})=>{

}
navbar(company='hitesh')
*/

//JSON: keys and values are string
//randomuser.me for json data