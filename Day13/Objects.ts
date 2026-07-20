// object - object contains properties and behaviour
// object contains variables and methods
// object is a collection of key-value pairs

//Ex:
// employee -- name, designation, salary, age, address, phone number
// behaviour - bonus(), getemdetails(), setdetails()

// student - name, sid., grade
// getdetails(), setdetails()

// Different ways to create an object in JS/TS
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS)

// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.

/*
let employee: object = {
  name: "John",
  age: 30,
  salary: 20000,
  job: "Engineer",
};
*/

let employee = {
  name: "John",
  age: 30,
  salary: 20000,
  job: "Engineer",
  getDetails: function (): string {
    //console.log(this.name, this.age, this.salary, this.job);
    return `${this.name} is a ${this.job} earning ${this.salary} `;
  },
};

console.log(typeof employee); //object

//accessing object - approach 1 (using dot (.) notation)
console.log(employee.name, employee.age); //John 30
console.log(employee.getDetails()); //John is a Engineer earning 20000

//accessing object - approach 2 (using braket notation)
console.log(employee["name"], employee["age"]); //John 30
console.log(employee["getDetails"]()); //John is a Engineer earning 20000

//Modify the value
//employee.job="Manager";
employee["job"] = "Manager";
console.log("Modified job is: ", employee.job);

//=====================================================================================
// 2. Inline Type Object - We also define the datatype of the keys (TS)
let student: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Scott",
  age: 15,
  grade: "A",
  getSummary: function () {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
  },
};
console.log(student.getSummary()); //Scott is 15 years old and scored grade A

// Problem with inline type object: need to repeat structure for every object
let student1: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Marry",
  age: 16,
  grade: "B",
  getSummary: function () {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
  },
};
console.log(student1.getSummary()); //Marry is 16 years old and scored grade B

// 3. Using type aliases (JS/TS): allows creating a new name for an existing type
//Example1:
type Product = {
  name: string;
  price: number;
  getInfo: () => string;
};

let book1: Product = {
  name: "Learn Java",
  price: 300,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  },
};
let book2: Product = {
  name: "Learn Python",
  price: 500,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  },
};
let book3: Product = {
  name: "Learn JS",
  price: 600,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  },
};

console.log(book1.getInfo()); //Learn Java costs 300
console.log(book2.getInfo()); //Learn Python costs 500
console.log(book3.getInfo()); //Learn JS costs 600

//Example2: Intersection types
type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: number;
};

type Candidate = Personal &
  Contact & {
    getContactInfo: () => string;
  };

let cand: Candidate = {
  name: "Scott",
  age: 25,
  email: "abc@gmail.com",
  phone: 123456789,
  getContactInfo: function () {
    return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
  },
};

console.log(cand.getContactInfo());

//===============================================================================
// 4. Using the classes (JS ES16/TS)

class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getDetails(): string {
    return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
  }
}

//object creation
let person1 = new Person("1111", "John", "Kenedy");
console.log(person1.getDetails());

let person2 = new Person("2222", "David", "Edgar");
console.log(person2.getDetails());

let person3 = new Person("3333", "Farid", "Dunya");
console.log(person3.getDetails());
