// super() - used to invoke immediate parent class constructor
// super - used to invoke immediate parent class method
// super - cannot be used to invoke the parent class property (in Java it is possible)

class Parent {
  num: number = 10;

  constructor() {
    console.log("This is Parent class constructor...");
  }

  display() {
    console.log("This is display() method from Parent class...");
  }
}

class Child extends Parent {
  num: number = 20; //overriden

  constructor() {
    super(); //this will call parent class constructor  (must be called)
    console.log("This is Child class constructor...");
  }

  show() {
    //console.log(super.num); //TS doesnt support super.num to access parent class properties directly like java
    console.log(this.num); //20
    console.log("This is show() method from Child class...");
  }

  //overrided method
  display() {
    super.display(); // this will invoke parent class method
    console.log("This is display() method from Child class...");
  }
}

let c1 = new Child();
c1.show();     //This is show() method from Child class...
c1.display();  //This is display() method from Child class...


