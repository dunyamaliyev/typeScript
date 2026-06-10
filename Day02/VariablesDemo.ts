// Variable: container which can hold/store some data.

// var, let, const

//Syntax:     keyword variableName:data type=value
//Ex:         var age:number=30
//Ex:         var age=30

/* var age=30;
console.log(age) */


//var vs let vs const
//--------------------
/*
    1. Scope
    2. Declaration/Value Assignment
    3. Re-declaration
    4. Re-initialization/Re-assignment
    5. Hoisting
*/

//var - We don't use this in modern JS/TS. Avoid var because it has function scope and can lead to unexpected issues.
//let - Use let when you need a variable that can change
//const - Use const when the valuable should not change



//1. Scope - Accesible area (Functional Scope(var) & Block Scope(let, const))

/* //Ex 1: var (Functional scope)
function varScope(){
    if(true){
        var msg="Hello World"
        console.log(msg)
    }
}
varScope() */


//Ex 2: 
/* function blockScope(){
    if(true){
        let msg="Hello World"
        const greet="Hello const"

        //console.log(msg)
        //console.log(greet)
    }
    console.log(msg) //cannot access
    console.log(greet) //cannot access
}
blockScope(); */


//Ex 3:
/* function scopeDiff(){
    if(true){

        var num1=10;
        let num2=20;
        const num3=30;
        console.log(num1);
        console.log(num2);
        console.log(num3);
    }
    console.log(num1); // can access
    console.log(num2); // cannot acces > block
    console.log(num3); // cannot acces > block
}
scopeDiff() */



//2. Declaration/Value Assignment

/* //Ex1:
var x; //declaration
console.log(x); //undefined
x=30; //initialization
console.log(x) */

//Ex2: let can be declared without initialization
/* let y; //declaration
console.log(y); //undefined
y=30; //initialization
console.log(y) */

//ex3: const must be initialzed at the time of declaration
/* //const z; //incorrect
const z=50; //correct
console.log(z); */



//3. Re-declaration 
//var - allows the Re-declaration
//let and const - not allows the Re-declaration (making code safer)

//Ex 1: var allows the re-declaration
/* var city="New York";
var city="Los Angeles"
console.log(city) */

//Ex 2: let - not allows re-declaration
/* let country="India" //not correct
let country="US" //not correct
console.log(country); */

//Ex 3: const - not allows re-declaration
/* const planet="Earth";
const planet="Mars";
console.log(planet); */



//4. Re-initialization/Re-assignment
// var and let - Re-assignment allowed
//const - Re-assignment not allowed (Only constants allowed - cannot chnage the value)

//Ex 1:  var - allows Re-assignment
/* var age=25;
age=30; //allowed
console.log(age); */

//Ex 2: let - allows Re-assignment
/* let age=25;
age=35; //allowed
console.log(age); */

//Ex 2: const - not allows Re-assignment
/* const age=25;
age=30; //not allowed
console.log(age); */



//5. Hoisting
/* console.log(a); //undefined 
var a=10;
console.log(a); */


/* console.log(a); //not initialized
let a=10;
console.log(a); */


/* console.log(a); //not initialized
const a=10;
console.log(a); */
