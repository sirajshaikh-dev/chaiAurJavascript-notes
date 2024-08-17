## parts of oop
Object literal

-Constructor function
-Prototypes
-Classes
-Instances(new,this)

## 4 Pillars 
Abstraction
Encapsulation
Inheritence
Polymorphism

# Object-Oriented Programming (OOP)
## Parts of OOP

### Object Literal
Object literals are a way to create objects in JavaScript. Here's an example:

```javascript
const user = {
    username: 'siraj',
    logincount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log('user details');
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
};
```
### Constructor function 
 **Constructor functions are special functions used to create and initialize objects. 
  They serve as blueprints for creating multiple objects with similar properties and methods.**
```javascript
function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeeting = function() {
        console.log(`Welcome ${this.username}`);
    };
    return this; // This is optional, it returns the object explicitly.
}

const userOne = new User('siraj', 4, true);
const userTwo = new User('shaikh', 8, false);

console.log(userOne.constructor);       // Function: User
console.log(userOne instanceof User);   // true
console.log(userOne instanceof Object); // true

```
