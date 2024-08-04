

/* QUESTION NUMBER: 049 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that adds a method called "perimeter" 
             to the Rectangle class which calculates 
             and returns the perimeter of the rectangle. */
  
/* INITIAL CODE: */
class Rectangle49 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  perimeter(){
    return 2 * width + 2 * height;
  }
}

/* QUESTION NUMBER: 050 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create an object instance of the Rectangle class 
   with a width of 5 and a height of 10. Print out the area 
   of the rectangle using the area method. */
  
/* INITIAL CODE: */
class Rectangle50 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  perimeter(){
    return 2 * this.width + 2 * this.height;
  }

  area(){
    return this.width * this.height;
  } 
}

/* QUESTION NUMBER: 051 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class called Rectangle with width 
and height attributes. Add a method called "area" which calculates 
and returns the area of the rectangle. */
  
/* INITIAL CODE: */
class Rectangle51 {}

/* QUESTION NUMBER: 052 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class called Circle52. Add a constructor 
that takes in the parameter radius. Initialize the property this.radius 
with the corresponding parameter in the constructor. 
Add a method called calculateArea that calculates and returns 
the area of the circle using the formula Math.PI * this.radius ** 2. 
Create an instance of Circle with radius 5 and store it in a variable 
named myCircle. Call the calculateArea method and store 
the result in a variable named area. Print the area. */
  
/* INITIAL CODE: */
class Circle52 {
  constructor(radius) {

  }
}

/* QUESTION NUMBER: 053 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class called Person53. Add a constructor 
that takes in the parameters name and age. Initialize the properties 
this.name and this.age with the corresponding parameters in the constructor. 
Add a method called "introduce" that prints 'Hi, my name is [name] 
and I am [age] years old.' using the values of the properties. 
Create an instance of Person with the name 'Alice' and age 25. 
Call the introduce method. */
  
/* INITIAL CODE: */
class Person53 {
  constructor() {

  }
}

/* QUESTION NUMBER: 054 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class called Animal54. Add a constructor 
that takes in the parameters name and sound. Initialize the properties 
this.name and this.sound with the corresponding parameters 
in the constructor. Add a method called makeSound that prints 
'The [name] says [sound]' using the values of the properties. 
Create an instance of Animal with the name 'lion' and sound 'roar'. 
Call the makeSound method. */
  
/* INITIAL CODE: */
class Animal54 {
  constructor() {

  }
}

/* QUESTION NUMBER: 055 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class Circle55 with property radius. 
Add a method calculateArea() that returns the area of 
the circle (Math.PI * this.radius ** 2). Create method perimeter 
that returns 2*pi*radius. Create another class Cylinder55 
that extends Circle55 and adds a property height. 
Override the method calculateArea() (it's twice the area of the circle 
and the height multiplied by the perimeter of the circle) 
and add a method calculateVolume() 
that returns the volume of the cylinder (pi * radius^2 * height). 
Initialize a cylinder object with radius 3 and height 5 
and calculate its area and volume and show them. */
  
/* INITIAL CODE: */
class Circle55 {
  constructor() {

  }
}

/* QUESTION NUMBER: 056 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class Rectangle56 with properties height and width. 
Add a method calculateArea() that returns the area of the rectangle. 
Create another class Square56 that extends Rectangle56 and 
add a method calculatePerimeter() that returns the perimeter of the square. 
Initialize a square object with length 5 and calculate its area and perimeter
and show them. */
  
/* INITIAL CODE: */
class Rectangle56 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

/* QUESTION NUMBER: 057 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a parent class Animal57 with properties name and age. 
Add a method getInfo() that returns the name and age of the animal. 
Also, create a child class Dog57 that extends Animal57 and 
add a method bark() that returns 'Woof!'. */
  
/* INITIAL CODE: */
class Animal57 {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

}

/* QUESTION NUMBER: 058 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code, creating lightBulb58 object and
   using it's showCharacteristics() method */
  
/* INITIAL CODE: */
const lightBulb58 = {
   
  powerWatt: 60,
  voltage: 230,
  showCharacteristics: () => {
    console.log(`Light bulb power: ${this.powerWatt},
                potential: ${voltage}V`)
  }

}

lightBulb58.showCharacteristics();

/* QUESTION NUMBER: 059 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a subclass 'Square59' that extends 'Rectangle59' 
and has an additional property 'side' of the square. Override 
the 'area()' method to calculate and return the area of the square. 
Initialize the 'side' property using a constructor method. */
  
/* INITIAL CODE: */
class Rectangle59 {
   
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
  
}

/* QUESTION NUMBER: 060 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code, creating todayTravel60 object and
   using it's avgSpeed() method */
  
/* INITIAL CODE: */
const todayTravel60 = {
   
  from: ['Raanana','Kfar-Saba'],
  to: ['Kfar-saba','Raanana'],
  distanceKM: [6,6],
  timeHour: [0.9,0.8],
  avgSpeed: () => {
    let totalDistance = this.distanceKm.reduce((tot,dist) => tot+dist);
    let totalTime = this.timeHour.reduce((tot,time) => tot+time);
    return (totalDistance/totalTime).toFixed(1);
  }

}

console.log(`avg speed: ${todayTravel60.avgSpeed()}`);



/* QUESTION NUMBER: 069 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which keyword is used to create a class in JavaScript? */
  
/* ANSWERS:
a) const
b) function 
c) class
d) let
*/

/* QUESTION NUMBER: 070 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: How do you define a constructor in a JavaScript class? */
  
/* ANSWERS:
a) constructor() {}
b) function constructor() {}
c) constructor = () => {}
d) init constructor() {}
*/




/* QUESTION NUMBER: 090 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */
/* QUESTION: Create a class 'Car90' with properties 'brand' and 'model'. 
Add a method 'getFullDescription' 
that returns a string combining the brand and model. */

/* INITIAL CODE */

class Car90 {
  
}

/* QUESTION NUMBER: 091 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */
/* QUESTION: You've got a class Person91. Create an object of this class, 
named 'person91'. 
Set the value of 'name' to 'John' and 'age' to 25. */

/* INITIAL CODE */

class Person91 {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

/* QUESTION NUMBER: 092 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the syntax for accessing a property 
of an object in JavaScript?
*/

/* ANSWERS:
a) object.property
b) object["property"]
c) both a && b
d) a is correct, and b not, but it would be correct, if there was a variable instead of a string
*/



