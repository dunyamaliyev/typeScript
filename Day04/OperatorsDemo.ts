//let a:number=10;
//let b:number=20;

let a:number=10, b:number=20;


//Arithmetic Operators - +, -, *, /, %, **
console.log("*********Arithmetic Operators**********");
console.log("a + b = ",a+b);
console.log("a - b = ",b-a);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);    
console.log("a ** b = ",5**2);


//Assignment Operators = 
console.log("*********Assignment Operators**********");
a=10;
b=5;

/* a+=b; //a=a+b
console.log("a = ",a); //a=15 */
console.log(a+=b); // a=a+b ---> 15
console.log(a-=b); //a=a-b ---> 10
console.log(a*=b); //a=a*b ---> 50
console.log(a/=b); //a=a/b ---> 10
console.log(a%=b); //a=a%b ---> 0
console.log(a**=b); //a=a**b ---> 0


//Relational Operators - >, <, >=, <=, ==, !=, ===, !==
console.log("*********Relational Operators**********");
a=10;
b=20;
console.log("a > b = ",a>b); //false
console.log("a < b = ",a<b); //true
console.log("a >= b = ",a>=b); //false
console.log("a <= b = ",a<=b); //true
console.log("a == b = ",a==b); //false
console.log("a != b = ",a!=b); //true

//=== (strict equality), !== (strict inequality)
//Strict equality and strict inequality operators compare both value and type.
let num1:any=10; //number
let num2:any="10"; //string
console.log("num1 == num2 = ",num1==num2); //true (only value is compared, type is not compared)
console.log("num1 === num2 = ",num1===num2); //false (compares both value and type)
console.log("num1 !== num2 = ",num1!==num2); //true (compares both value and type)



//Logical Operators - &&, ||, !
//--------------------------------------
// b1    b2    b1 && b2    b1 || b2    !b1
// true   true    true       true    false
// true   false   false      true    false
// false  true    false      true    true
// false  false   false      false   true



console.log("*********Logical Operators**********");
let b1:boolean=true;
let b2:boolean=false;
console.log("b1 && b2 = ",b1&&b2); //false
console.log("b1 || b2 = ",b1||b2); //true
console.log("!b1 = ",!b1); //false
console.log("!b2 = ",!b2); //true



//combination of logical and relational operators
console.log("*********Combination of Logical and Relational Operators**********");

console.log(20>10 && 10>5); //true
console.log(10<20 || 5>10); //true

console.log(10<20 && 5>10); //false
console.log(10>20 || 5>10); //false




