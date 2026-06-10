/*
1. Primitive Data Types (built-in)
    Number
    String
    Boolean
    Null
    Undefined
    Any
    Union Type
    Void


2. Non-Primitive Data Types (objects)
    Array
    Class
    Function
    İnterface
    Touple etc..
*/



// 1. Number Type
// Represents both integers and floating-point numbers

/* let age:number=25;
let price=25.5;
let big=2222222222235;

console.log("Age:",age)   //Age: 30
console.log("Price:",price)
console.log("Big:",big)

console.log(typeof(age))
console.log(typeof age) */



// 2. String Type
//Represents textual data

/* 
1. SingleQuote ('')
2. DoubleQuote (" ")
3. Backticks (``)  Template Literals
*/

/* let firstName:string="John";
let lastName:string='Doe';
//console.log("Hello",firstName,lastName)  //Hello John Doe


let greeting:string=`Hello, ${firstName} ${lastName}`;
console.log(greeting)  //Greeting: Hello, John Doe
 */



// 3. Boolean Type
// Represents true or false values

/* let isStudent:boolean=true;
let hasLicense:boolean=false;

console.log("Is Student:",isStudent)    //Is Student: true
console.log("Has License:",hasLicense)  //Has License: false */



// 4. Null and Undefined
// Null represents the intentional absence of any object value
// Undefined represents a variable that has been declared but not assigned a value

/* let emptyValue:null=null;
let notAssigned:undefined;
console.log("Empty Value:",emptyValue)  //Empty Value: null
console.log("Not Assigned:",notAssigned) //Not Assigned: undefined

let price:number;
console.log("Price:",price)  //Price: undefined - compile time error: Variable 'price' is used before being assigned. ts(2454)
 */



// 5. Any Type
// Represents any value and can be used when the type is not known at compile time

/* let value:any="Welcome";
console.log(typeof value)  //string

value=100;
console.log(typeof value)  //number

value=true;
console.log(typeof value)  //boolean

console.log("value:",value)  //value: true */



// 6. Union Type
// Allows a variable to hold values of multiple types

/* let id:number|string|boolean;
id=123;
console.log("ID:",id)  //ID: 123    

id="ABC123";
console.log("ID:",id)  //ID: ABC123

id=true;
console.log("ID:",id)  //ID: true */



// 7. Void Type
// Represents the absence of a value, commonly used for functions that do not return anything


/* function show():void{
    console.log("Welcome")
}
show()  //Welcome */


function sum(x:number,y:number):number{
    return x+y;
}
let result:number=sum(5,10);
console.log("Result:",result)  //Result: 15




