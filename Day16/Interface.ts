/*

1. An interface in TypeScript •is a way to define the structure of an object
2. It tells the compiler that properties and types an object should have
3. It's like a blueprint for objects.

Absract method: we only have signature of the method (there is no implementation)

interface interfaceNAme {
  properties
  abstract methods

}

1 Regular properties
2 Optional properties
3 Readonly properties & function types
4 Extending interfaces
5 Class implements interface

*/

//Example 1: Basic interface

interface Person {
  name: string;
  age: number;
}

let student: Person = {
  name: "John",
  age: 30,
};

console.log(student.name); //John
console.log(student.age); //30
console.log(student); // { name: 'John', age: 30 }

//Example 2: Optional Properties (?)
interface Employee {
  eid: number;
  ename: string;
  edeparment?: string; //optional property
}

let emp1: Employee = {
  eid: 101,
  ename: "John",
};

let emp2: Employee = {
  eid: 102,
  ename: "Farid",
  edeparment: "Accounting",
};

console.log(emp1.eid, emp1.ename, emp1.edeparment); //101 John undefined
console.log(emp2.eid, emp2.ename, emp2.edeparment); //102 Farid Accounting

//Example 3: Readonly Property (readonly to prevent modification) & Function type
interface Book {
  title: string;
  readonly isbn: string;

  display(): void; // abstract method
}

let b1: Book = {
  title: "Learn Playwright",
  isbn: "123-ABC",

  display() {
    console.log(b1.isbn, b1.title);
  },
};

console.log(b1.title); //Learn Playwright
console.log(b1.isbn); //123-ABC
b1.display(); //123-ABC Learn Playwright

console.log("After changing the values...");

b1.title = "Learn TypeScript";
console.log("After changing title: ", b1.title); //After changing title:  Learn TypeScript

//b1.isbn="123-XVY"; //error because it is read only

/*
//Example 4: Extending lnterfaces (Inheritance is applicable)
//Parent interface
interface Animal {
  name: string;
}

//Child interface
interface Dog extends Animal {
  color: string;
}

let mydog: Dog = {
  name: "Buddy",
  color: "Black",
};


console.log(mydog.name,mydog.color); //Buddy Black
*/

//Example 5:
//class can extend another class
// interface can extend another interface

//class can implement interface
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  color: string;

  constructor(name: string,color: string) {
    this.name = name; //inherited from interface Animal
    this.color=color; //this property belongs to Dog class
  }

  sound() {
    console.log("bark...");
  }
}

let pet = new Dog("Tommy","Black");
console.log(pet.name);
console.log(pet.color);
pet.sound();
