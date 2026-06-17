// Anonymous Function (Unnames Function/Nameless function)



/*
An anounymous function is a function that does not have a name.
Instead, it is assigned to a variable, ahich acts as its name.

Syntax:
Let variable=function(parameters){
    function body
}
vaiable(); calling the function

*/


//Example 1: Anonymous function
/* let msg=function(): string{
    return "Hello TypeScript";
}

console.log(msg());
 */


//Example 2: Anonymous Function with paremeters
let multiply=function(a:number, b:number):number{
    return a*b;
}
console.log(multiply(10,20))


