let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange", "mango"];
console.log("Numbers array", numbers); //[ 1, 2, 3, 4, 5 ]
console.log("Fruites array", fruits); //[ 'apple', 'banana', 'orange', 'mango' ]

//length - attribute (not a method)
console.log("Size of numbers array:", numbers.length); //5
console.log("Size of fruits array:", fruits.length); //4

// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1,..., elementN)

numbers.push(6, 7);
console.log("After push", numbers); // [1,2,3,4,5,6,7]

// 2. pop() - rmeoves the last elemets from the array
// Syntax: array.pop()

let lastFruite = fruits.pop();
console.log("After pop", fruits); //[ 'apple', 'banana', 'orange' ]
console.log("Removed Fruite is:", lastFruite); //mango

// 3. shift() - Removes the first element from an array
// Syntax: array.shift()
let firstNumber = numbers.shift();

console.log("After shift", numbers); //[ 2, 3, 4, 5, 6, 7 ]
console.log("Removed number", firstNumber); //1

// 4. unshift() - Add single/multiple elements to the beginning of an arrray
// Syntax: array.unshift(element1,......, elementN)
fruits.unshift("kiwi", "pear");
console.log("After unshift", fruits); // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

// 5. concat() - combines two or more arrays of same type
// Syntax: array.concat(array1, array2,......,arrayN)
let combinedArray = numbers.concat([8, 9, 10]);

console.log("Concatenated array:", combinedArray); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// 6. slice() - extracts a section of an array
// Starting Indez starts from 0
// Ending Index will be exclusive. Ex: If 3 is Ending Index it will consider 2 (3-1=2)
// Syntax: array.slice(startIndex, endIndex)
let extractedArray=fruits.slice(1, 3);
console.log("After Slice():",extractedArray); // [ 'pear', 'apple' ]


// 7. splice() - Add/removes elements from an array (from everywhere)
// Syntax: array.splice(startIndex, deleteCount, item1, item2,......,itemN)
console.log("Current elements in fruits array:", fruits);//[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

//ex1: only rmeoving
let removedElements=fruits.splice(1, 2); // here 1 is starting index and 2 is how many elements to be removed
console.log("After splice(1,2):", fruits); // [ 'kiwi', 'banana', 'orange' ]
console.log("Removed elements:", removedElements); // [ 'pear', 'apple' ]


//ex2: not remowed but added
fruits.splice(1, 0, "pineapple", "grape");
console.log("After splice(1,0,'pineapple','grape'):", fruits); // [ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ] 


//ex3: both remove and add
fruits.splice(1, 2, "mango", "cherry");
console.log("After splice(1,2,'mango','cherry'):", fruits); // [ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]


// 8. indexOf() - finds the index of an element? if element not found then return -1
// Syntax: array.indexOf(searchElement)  or array.indexOf(searchElement, startIndex)

//ex1:
let bananaIndex = fruits.indexOf("banana"); //3
console.log("Index of 'banana':", bananaIndex);

//ex2:
let papayaIndex = fruits.indexOf("papaya");
console.log("Index of 'papaya':", papayaIndex); // -1

//ex3:
bananaIndex = fruits.indexOf("banana", 2); // 3
console.log("Index of 'banana' starting from index 2:", bananaIndex); // 3


// 9. includes() - checks if an element exists
// true or false
// Syntax: array.includes(searchElement, fromIndex)

let isApplePresent = fruits.includes("apple");
console.log("Is 'apple' present in fruits array?", isApplePresent); // false
let isBananaPresent = fruits.includes("banana");
console.log("Is 'banana' present in fruits array?", isBananaPresent); // true


// 10. toString() - converts an array to string
// Syntax: array.toString()
console.log(numbers); // [ 2, 3, 4, 5, 6, 7 ]
let numbersString = numbers.toString(); 
console.log("Numbers array as string:", numbersString);// "2,3,4,5,6,7"


let myArray:string[]=['a','b','c','d','e'];
console.log("Current elements in myArray:", myArray); // [ 'a', 'b', 'c', 'd', 'e' ]
let str:string=myArray.toString();
console.log("myArray as string:", str); // "a,b,c,d,e"







