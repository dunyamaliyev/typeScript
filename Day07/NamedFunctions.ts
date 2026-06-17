// Named Fucntion: A function that is declared with a name.

/*
Syntax:

function functionName(parameter): returnType {
    block of code
}

functionName(); // calling the function/invoking the function
*/

//Example 1:  Named function with no parameteres and no return type

/* function display():void{
    console.log("Welcome to TS")
}

display(); //calling function */

//Example 2: Named function with parameters and return type
/* function addNumbers(x:number, y:number):number{
    return x+y;
}
//let res:number=addNumbers(2,3);
//console.log(res)

console.log(addNumbers(5,6)); */

//Example 3: Named function with Rest parameters
/* function addNumbers(...nums:number[]){
    let i;
    let sum:number=0;

    for(i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    console.log("sum of the numbers: ",sum)
}
addNumbers(5,4);
addNumbers(30,10,20);
addNumbers(10,20,30,40); */

//Example 4: Named function with Rest parameters - multiple types
/* function findElements(...elements:(number|string)[]):number{
    return elements.length;
    
}
console.log(findElements(3,"john",2,1,"scott")); //5
console.log(findElements(10,20,30,40,50,60)); //6 
console.log(findElements("abc","xyz")); //2 */

//Example 5: Named function with operational parameters
/* function displayDetails(id: number, name: string, mailId?: string): void {
  console.log("ID:", id);
  console.log("Name:", name);
  if (mailId !== undefined) {
    console.log("Email", mailId);
  }
}

displayDetails(123,"scott","scott@gmail.com");
displayDetails(123, "Scott"); */



//Example 6: Named function with Default Parameters
function calculateDiscount(price:number, rate:number=0.50):void{
    let discount:number=price*rate;
    console.log("Discount Amount: ",discount);
}
calculateDiscount(1000,0.30);
calculateDiscount(1000)








