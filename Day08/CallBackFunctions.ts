//a call back function: a function passed as an argument to another function and executed later.

//Example 1:
//function that takes callback function as an parameter
/* function greet(name: string, smg: (message: string) => void) {
  console.log(name);
  smg("Hello"); //executing the callback function
}

//call back function
function showMessage(message: string) {
  console.log(message);
}

//calling the function by passing the callback function
greet("John", showMessage); */

//Exmaple 2:

function sum(a:number,b:number,callback:(result:number)=>void){
    let result=a+b;
    callback(result);

}

//callback function
function displayResult(result:number):void{
    console.log(result);
}

sum(10,20,displayResult);


