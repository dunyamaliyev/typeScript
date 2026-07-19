
// String - text value or a combination of characters
/*
1. Single Quote - String literal ('SingleQuote')
2. Double quote — String literal ("DoubleQuote")
3. backtick (``) String template - when we try to use a string variable inside another sting value ${variable}'
// index in string starts with 0

'' or "" or ``

*/

// Declaration of string variable
let str1:string='This is a string with single quote';
let str2:string="This is a string with double quote";
let str3:string=`This is a string with backtick quote`;

console.log(str1);
console.log(str2);
console.log(str3);


// when to use backtick quote - ``
let num:number=10;
console.log("number is:",num); //10 - valid
console.log("number is: ${num}"); // not valid
console.log('number is: ${num}'); // not valid
console.log(`number is: ${num}`); //number is: 10  valid


//String methods
let str:string="Hello, TypeScript!";

// 1. length - find the length of a string
console.log("Length of string:", str.length); // Length of string: 18

// 2. toUpperCase() and toLowerCase()
console.log("Uppercase:", str.toUpperCase()); // Uppercase: HELLO, TYPESCRIPT!
console.log("Lowercase:", str.toLowerCase()); // Lowercase: hello, typescript!

// 3. charAt() and indexOf()
console.log("Character at index 7:", str.charAt(7)); // Character at index 7: T
console.log("Index of 'Type':", str.indexOf("Type")); // Index of 'Type': 7
    
// 4. substring(startIndex, endIndex)
// ending index is exclulsive
//"Hello, TypeScript!"
console.log(str.substring(0, 5)); // Hello

// 5. includes() - returns true or false
// string value is case sensitive
console.log("Includes 'Type':", str.includes("Type")); // Includes 'Type': true
console.log("Includes 'abc':", str.includes("abc")); // Includes 'abc': false
console.log(str.includes("!")); // Includes '!': true
console.log(str.includes("TYPESCRIPT")); // Includes 'TYPESCRIPT': false

// 6. startsWith() and endsWith() - returns true or false
console.log("Starts with 'Hello':", str.startsWith("Hello")); // Starts with 'Hello': true
console.log("Ends with '!':", str.endsWith("!")); // Ends with '!': true
console.log("Ends with 'abc':", str.endsWith("abc")); // Ends with 'abc': false

// 7. replace()
//"Hello, TypeScript!"
console.log("Replaced string:", str.replace("TypeScript", "JavaScript")); // returns a new string with the replacement

// 8. split() - splits a string into an array of substrings
//ex1:
console.log("After Split string:", str.split(",")); // ["Hello", " TypeScript!"]    

//ex2:
let mystring:string="abc@gmail.com,xyzabc";
let arr=mystring.split(",");
console.log("email:", arr[0]); // abc@gmail.com
console.log("name:", arr[1]); // xyzabc


// 9. trim(), trimStart(), trimEnd() - removes whitespace from both ends of a string
mystring="   Hello, TypeScript!   ";
console.log("Original string:", mystring);               //     Hello, TypeScript!  
console.log("Trimmed string:", mystring.trim());         // Hello, TypeScript!
console.log("trimStart string:", mystring.trimStart());  // Hello, TypeScript!
console.log("trimEnd string:", mystring.trimEnd());      // Hello, TypeScript!


// 10. concat()
str1="welcome";
str2="to typeScript";
str3="and javascript";

console.log("Concatenated string:", str1.concat(" ", str2)); // Concatenated string: welcome to typeScript
console.log("Concatenated string:", str1+str2); // alternative - not recommended
console.log("welcome".concat(" to ", "TypeScript")); // welcome to TypeScript
console.log("Concatenated string:", str1.concat(" ", str2, " ", str3)); // Concatenated string: welcome to typeScript and javascript



// concept of string immutability - string value cannot be changed once it is created
let str4:string="Hello";
console.log("Before change:", str4);
str4="World";
console.log("After change:", str4); 

str1="welcome";
let modifiedString=str1.concat(" to TypeScript");
console.log("Modified string:", modifiedString);    
console.log("Original string:", str1); // Original string: welcome




//multiline string
let multiLineString:string=`This is a multiline string.
It can span multiple lines.
Each line is separated by a newline character.`;
console.log("Multiline string:", multiLineString);
