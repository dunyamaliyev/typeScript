// if condition

/* 
if(condition){
    // satatements (code to be executed if condition is true)
}
*/


//example 1: if age is greater than or equal to 18, then print "You are eligible to vote"

/* let age:number = 20;
if(age >= 18){
    console.log("You are eligible to vote");
} */



// if else condition

/*  
if(condition){
    // statements (code to be executed if condition is true)
}
else{
    // statements (code to be executed if condition is false)
}
*/

// example 2: if number is divisible by 2, then print "Even number", otherwise print "Odd number"

/* let num:number = 10;
if(num % 2 == 0){
    console.log(`${num} is an Even number`);
}
else{
    console.log(`${num} is an Odd number`);
} */


// nested if else condition
/*
if(condition1){
    // statements (code to be executed if condition1 is true)
}
else if(condition2){
    // statements (code to be executed if condition2 is true)
}
else{
    // statements (code to be executed if both condition1 and condition2 are false)
}
*/

// example 3: Depending on the marks obtained, print the grade of a student
/*
marks >= 90: Grade A
marks >= 75: Grade B
marks >= 60: Grade C
marks < 60: Grade D
*/

/* let marks:number = 50;
if(marks >= 90 && marks <= 100){  
    console.log("Grade: A");
}
else if(marks >= 75 && marks < 90){
    console.log("Grade: B");
}
else if(marks >= 60 && marks < 75){
    console.log("Grade: C");
}
else{
    console.log("Grade: D");
}  */


//Example 4: Browser selection
/* let browser:string = "Chrome";
if(browser === "Chrome"){
    console.log("You are using Chrome browser");
}
else if(browser === "Firefox"){
    console.log("You are using Firefox browser");
}
else if(browser === "Edge"){
    console.log("You are using Edge browser");
}
else{
    console.log("Browser not supported");
} */



//switch case statement

/* switch(expression){ 
    case value1:
        // statements (code to be executed if expression === value1)
        break;
    case value2:
        // statements (code to be executed if expression === value2)
        break;
    case value3:
        // statements (code to be executed if expression === value3)
        break;
    default:
        // statements (code to be executed if expression does not match any case)
} */

//example 5: Dependding on the value of day, print the corresponding day of the week

/* let day:number = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
} */


//Example 6: The switch statement can also include an expression
let x:number=10, y:number=5;
switch(x - y){
    case 0:
        console.log("Result is zero");
        break;
    case 5:
        console.log("Result is five");
        break;
    case 10:
        console.log("Result is ten");
        break;
    default:
        console.log("Result is something else");    

}










