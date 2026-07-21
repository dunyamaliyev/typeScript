/*
1. Class
2. Read only Properties
3. Optional Property
4. Static properties and methods
   // 1) static properties/methods are common/shared accross all the onjects
   // 2) static properties/methods can be accessed through class name directly
   // 3) static properties/methods can be modified using class
   // 4) we cannot use this for static properties? instead we can use class name

*/

class Student {
  readonly studentId: number; // ready only property (can only be assigned once, inside constructor)
  name: string; // regular property
  email?: string; // optional property (can be undefined)
  static schoolName: string = "Greenwood High School"; //static property / shared among all instances/objects

  //Constructor
  constructor(sid: number, name: string, email?: string) {
    this.studentId = sid;
    this.name = name;
    this.email = email; // if you dont pass email then it is undefined
  }

  //Method
  displayInfo(): void {
    console.log("Student ID: ", this.studentId);
    console.log("Student Name: ", this.name);

    if (this.email) {
      console.log("Student Email: ", this.email);
    } else {
      console.log("Email is not provided");
    }
    console.log("School Name: ", Student.schoolName); //access static property using Student class
  }

  //method
  static changeSchoolName(newName: string): void {
    Student.schoolName = newName;
  }
}

//Usage
let s1 = new Student(101, "Farid");
let s2 = new Student(102, "Kenedy", "xxx@gmail.com");

//Display Student info
s1.displayInfo();
s2.displayInfo();

// try to modify the studentID of s1 object
//s1.studentId=111; // cannot assign because it is read only property

// change the school name using static method
Student.changeSchoolName("Sunrise Academy");

//Display Student info
console.log("Displaying student info after changing school name...");
s1.displayInfo();
s2.displayInfo();



