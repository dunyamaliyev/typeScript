//======= forEach(), map(), filter(), reduce(), some(), every() =======

// 1. forEach() - executes a function once for each array element
// it takes function as a parameter
// Syntax: array.forEach(function(currentValue, index, array){})

//currentValue - The current element being processed in the array.
//index (optional) - The index of the current element being processed in the array.
//array (optional) - The array the current element belongs to.


//ex1: get index of all the fruits along with value
let fruits: string[]= ["apple", "banana", "orange", "mango","kiwi"];
console.log("Printing fuits along with index using for loop....");

for(let i in fruits){
    console.log(i,fruits[i]);
}

console.log("Printing fuits along with index using forEach()....");

/* fruits.forEach(function(element, index){
    console.log(`${index}, ${element}`);
});
 */


//using arrow function
fruits.forEach((element, index) => {
    //console.log(`${index}, ${element}`);
    console.log(index,element);
});



//ex2: 
fruits.forEach((element) => {
    console.log(element.toUpperCase());
});



// 2. map() - creates a new array with the result of calling teh function on every element of an array
// it takes function as a parameter
//retruns the same number of elements that we have in original array
// Syntax: array.map(function(currentValue, index, array){})

//ex1: get square of all the numbers in an array. ex: [1,2,3,4,5] => [1,4,9,16,25]
let numbers:number[]=[1,2,3,4,5];
let squaredNumbers=numbers.map(function(element){
    return(element*element);
});

console.log("Squared Numbers:", squaredNumbers); // [1,4,9,16,25]
console.log("Original Numbers:", numbers); // [1,2,3,4,5]


//ex2: double each number in an array. ex: [1,2,3,4,5] => [2,4,6,8,10]
/* let doubledNumbers=numbers.map((element) => {
    return(element*2);
}); */


let doubledNumbers=numbers.map((element) => (element*2)); // if you have single return statement inside the arrow function, {} and return statements are optional

console.log("Doubled Numbers:", doubledNumbers); // [2,4,6,8,10]
console.log("Original Numbers:", numbers); // [1,2,3,4,5]


// 3. filter() - creates a new array with all elements that pass the test implemented by the provided function
// it takes function as a parameter
// returns either same or fewer elements compared to the original array
// Syntax: array.filter(function(currentValue, index, array){})

//ex1: get the only even numbers from the array
let evenNumbers=numbers.filter((element) => (element%2==0));
console.log("Even Numbers:", evenNumbers); // [2,4]

//ex2: get the only numbers greater than 3 from the array
let greaterThanThree=numbers.filter((num) => (num>3));
console.log("Numbers greater than 3:", greaterThanThree); // [4,5]


// 4. reduce() - applies a function on every element of an array and returns a single value
// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - the accumulated value from previous iterations
//currentValue - the current element being processed

//ex1: get the total (sum) of all the elements in array
/* let total=0;
for(let i=0; i<numbers.length; i++){
    total+=numbers[i]; //1 2 3 6 10
}
console.log("Total using for loop:", total); // 15
 */

//using reduce()
let reduceResult=numbers.reduce((total,element)=> total+element,0); // 0 is the initial value of total and it is optional.
console.log("Total using reduce:", reduceResult); // 15


// 5. some() - checks if any element satisfies a condition
// returns true if at least one element passes the condition, otherwise returns false
// Syntax: array.some(function(currentValue, index, array){})

//ex1: check if array contains negative values
let hasNegativeValues=numbers.some((element) => element<0); 
console.log("Does Array contain negative values?", hasNegativeValues); // false

//ex2: check if array contains positive values
let hasPositiveValues=numbers.some((element) => element>0); 
console.log("Array contains positive values:", hasPositiveValues); // true

// 6. every() - checks if all elements satisfuy a condition
// returns true if all elements pass the condition, otherwise returns false
// Syntax: array.every(function(currentValue, index, array){})

//ex1: check if all elements are even numbers
let allEvenNumbers=numbers.every((element) => element%2==0);
console.log("Are all numbers even?", allEvenNumbers); // false

//ex2:
let allGreaterThanOne=numbers.every((element) => element>=1);
console.log("Are all numbers greater than or equal to 1?", allGreaterThanOne); // false

//ex3: all number positive
let allPositiveNumbers=numbers.every((element) => element>0);
console.log("Are all numbers positive?", allPositiveNumbers); // true



