/*
Arrays in TypeScript
--------------------
- An array is a special type of variable that stores multiple values
- The values can be of the same data type or different data types
- Arrays are declared using `[]` or the generic `Array<T>` type
- Indexing starts from 0
- Arrays are an ordered collection of elements


*/

//Approach 1: using literal

/* let names:string[]=[];  // Declaration

// Initialization/assigning values

names[0]="John";
names[1]="Smith";
names[2]="Peter";
names[3]="Scott";
 */

/* 
let names:string[]=["Smith","John","Peter","Scott"]; //declaration+initialization
console.log(names);
 */

//Approach 2: using Generic Array<T> type
let empNames: Array<string> = ["Smith", "John", "Peter", "Scott"];
let empIds: Array<number> = [101, 102, 103, 105];
let data: Array<string | number> = ["John", 101, "Smith", 102, "Peter", 103];
let mixedData: Array<any> = [
  "John",
  101,
  "Smith",
  102,
  "Peter",
  103,
  true,
  null,
];
/* console.log(mixedData);
console.log(mixedData[1]); */

//Example 1: Iterating over an array using a traditional for loop
console.log("Size of an arry", empNames.length); //4 (how many values stored)

console.log("Employee names..........");

for (let i = 0; i < empNames.length; i++) {
  //i<=empNames.length-1
  console.log(empNames[i]); // i is representing an index
}

//Example 2: Iterating using the "for....in" loop (indexes)
console.log("Employee Ids.......");
for (let i in empIds) {
  console.log(empIds[i]);
}

//Example 3: Iterating using the "for...of" loop (values)
console.log("Data.....");
for (let value of data) {
  console.log(value);
}

//Example 4: Passing an Array to the function

//Search an element in an array using function
function search(ele: number, arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return true; // Element found
    }
  }
  return false;
}
let arr: number[] = [10, 20, 30, 40, 50];
console.log(search(30, arr)); //true
console.log(search(100, arr)); //false

//Example 5: A function takes an Array and returns an Array

function capitalizeWords(arr: string[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].toUpperCase();
  }
  return result;
}
let words:string[]=["hello","world","typescript"];
console.log(capitalizeWords(words));

