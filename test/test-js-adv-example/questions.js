/* QUESTION 001 */

/**
 *  QUESTION:
 * Create a function named `checkIfTen()` that takes an input 
 * and checks if it is greater than 10. If it is, return 'Greater than 10', 
 * if it is equal to 10 return 'Equal to 10', 
 * and if it is less than 10 return 'Less than 10'
 *  - should use nested ternary operator for it. */

/**
 * INITIAL CODE:
 */

const inp1 = [-5.5, -70032, 9.9, 10, 10.1, 128, 10, 10.5];

function checkIfTen(input) {
  console.log(`Checking ${input} ...`);
  return '???';
}

inp1.forEach(num => console.log(checkIfTen(num)));

/* QUESTION 002 */

/**
 *  QUESTION:   Create a function named `dividbleBy3()` that takes an input  
 * and checks if it is dividible by 9 , only by 3 or by neither. 
 * Use a nested ternary operator for it.  
 * */

/**
 * INITIAL CODE:
 */

const inp2 = [-9, -102, 77, 444444, 0, 1, 20, 105, 20007];

function dividibleBy3(input) {
  console.log(`Checking ${input} ...`);
  return '???';
}

inp2.forEach(num => console.log(dividibleBy3(num)));

/* QUESTION 003 */

/**
 * QUESTION:   Create a function named `checkIfPositive()` that takes an input   
 * and checks if it is a positive number. If it is, return 'Positive',   
 * if it is negative return 'Negative', and if it is zero return 'Zero'.  
 * Use nested ternary operator for it.  */

/**
 * INITIAL CODE:
 */

const inp3 = [-5.5, -70032, 0, 21, 22, 128, -10.5, 0];

function checkIfPositive(input) {
  console.log(`Checking ${input} ...`);
  return '???';
}

inp3.forEach(num => console.log(checkIfPositive(num)));
/* QUESTION 004 */

/**
 * QUESTION:   Create a function named `warmOrCool()` that takes an input color  
 * and checks if it is 'warm', 'cool' or 'neutral'.  
 * Use nested ternary operator for it.
 * Assume that there are no other input colors except those specified
 * in the arrays 'cool','warm','neutral'  */

/**
 * INITIAL CODE:
 */

const inp4 = ['yellow', 'Orange', 'LightBlue', 'red', 'black', 'GRAY', 'green', 'purple'];
const warm = ['yellow','orange','red','orangered','brown','pink'];
const cool = ['ligtgreen','green','aquamarine','turquoise','lightblue','blue','purple'];
const neutral = ['white','lightgray','lightgrey','gray','grey','black'];

function warmOrCool(input) {
  console.log(`Checking ${input} ...`);
  let inp = input.toLowerCase();
  return '???';
}

inp4.forEach(color => console.log(warmOrCool(color)));

/* QUESTION 005 */

/**
 * QUESTION:   Create a function named `fruitOrVegetable()` that takes an input food name  
 * and checks if it is 'fruit', 'vegetable' or neither.  
 * Use nested ternary operator for it.
 *  */

/**
 * INITIAL CODE:
 */

const inp5 = ['avoCADO', 'Grapes', 'WaterMelon', 'bread', 'pumpkin', 'pepper', 'EGGS', 'GRAPES', 'onion'];
const fruit = ['orange','lemon','melon','watermelon','grapes','strawberry','avocado'];
const vegetable = ['eggplant','onion','tomato','cucumber','pepper','squash','pumpkin'];

function fruitOrVegetable(input) {
  console.log(`Checking ${input} ...`);
  let inp = input.toLowerCase();
  return '???';
}

inp5.forEach(food => console.log(fruitOrVegetable(food)));

/* QUESTION 006 */

/**
 * QUESTION: In which order the numbers would be printed? 
 * console.log(0);  
 * 
 * setTimeout(() => {
 *      console.log(1);
 *      setTimeout(() => {
 *          console.log(2);
 *          setTimeout(() => {
 *              console.log(3)
 *          },300)
 *      },200)
 *  },400);
 * 
 * console.log(4);
 *  */

/*
Answers: 
1. 0, 4, 1, 2, 3
2. 0, 1, 2, 3, 4
2. 0, 3, 2, 1, 4
2. 0, 4, 3, 2, 1
*/

/* QUESTION 007 */

/**
 * QUESTION: In which order the numbers would be printed? 
 * 
console.log(`q7:`,1);

setTimeout(() => {
    console.log(`q7:`,2);
}, 100);

console.log(`q7:`,3);

setTimeout(() => {
    console.log(`q7:`,4);
}, 50);

console.log(`q7:`,5);
  */

/*
Answers: 
1, 3, 5, 2, 4
1, 3, 2, 5, 4
1, 2, 3, 4, 5
1, 3, 5, 4, 2
*/

/* QUESTION 008 */

/**
 * QUESTION: In which order the numbers would be printed? 
 * 
console.log(`q8:`,1);

setTimeout(() => {
    console.log(`q8:`,2);
}, 0);

console.log(`q8:`,3);

setTimeout(() => {
    console.log(`q8:`,4);
}, 100);

console.log(`q8:`,5);
  */

/*
Answers: 
1, 3, 5, 2, 4
1, 2, 3, 5, 4
1, 2, 3, 4, 5
1, 3, 2, 5, 4
*/

/* QUESTION 009 */

/**
 * QUESTION: In which order the numbers would be printed? 
 * 
console.log(`q9:`,1);

setTimeout(() => {
    
    setTimeout(() => {
        console.log(`q9:`,2);
    }, 400);
    
    console.log(`q9:`,3);
    
    setTimeout(() => {
        console.log(`q9:`,4);
    }, 100);
    
},400)

console.log(`q9:`,5);
  */

/*
Answers: 
1. 1, 5, 3, 4, 2
2. 1, 5, 2, 3, 4
3. 1, 2, 3, 4, 5
4. 1, 3, 2, 5, 4
*/



/* QUESTION 010 */ 
/* QUESTION: Create a function named 'doubleTimeout' that doubles 
a given number (n) after a delay of 2 seconds and shows it, 
and then multiplies it by 3 after another delay of 3 seconds 
and shows it's final value.
*/
let n1 = 77;

function doubleTimeout(n) {
    console.log(`Starting from ${n} ...`);

}

doubleTimeout(n1);

/* QUESTION 011 */ 
/* QUESTION: Create a function named 'nestedTimeout' 
that prints 'Howdy!' after 2.5 seconds, and then 'World!' after another 1.5 seconds. 
Use nested setTimeout calls.
*/

function nestedTimeout() {
    
}

nestedTimeout();

/* QUESTION 012 */ 
/* QUESTION: Create a function named 'onDocLoad12' 
that changes the color of the button after 5 seconds after the document loads,
and after that performs one more change 2 seconds later (use for these classes
  from css file: "orange" and "blue"), 
use it with listener that is added to the document for the "DOMContentLoaded" event, 
and to the listener of btnStop12 add arrow function that enables us to cancel 
the both changes or the second change - depends when we click the button. 

*/

const btnStop12 = document.querySelector('#q012 > .btn');
let timerId;

function onDocLoad12() {

}

document.addEventListener();
btnStop12.addEventListener();

/* QUESTION 013 */ 
/* QUESTION: Create a function named 'onDocLoad13' 
that changes the font-family of the button after 4.5 seconds after the document loads,
and after that performs one more change 2.5 seconds later,
and performs change to the first font-family (by removing the last font-family class) 
(use for these classes from css file: "monospace" and "times-new-roman"), 
use it with listener that is added to the document for the "DOMContentLoaded" event, 
and to the listener of btnStop13 add arrow function that enables us to cancel 
the series of the changes at any step - depends when we click the button. 

*/

const btnStop13 = document.querySelector('#q013 > .btn');

function onDocLoad13() {

}

document.addEventListener();
btnStop13.addEventListener();

/* QUESTION 014 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ 
/* QUESTION: Create a function named prettyFlower(flower)  
that shows in the console "Here is your pretty <flower>",
and and a function named uglyFlower(flower) that shows in the console 
"Here is your ugly <flower>". 
Create also a function getFlower(callback) that writes in the console
"Wait a second for the surprize ...", runs setTimout for 1sec,
gets randomly a flower from the array and uses the callback with
the flower that it got.
Run getFlower for the first time with the argument of prettyFlower,
and the second time with the argument of uglyFlower
*/

const flowers = ['rose','forget-me-not','tulip','iris','sunflower'];

function prettyFlower(flower) {

}

function uglyFlower(flower) {

}

function getFlower(callback) {

}

/* QUESTION 015 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ 
/* QUESTION: Create a function named nextMonth(present)  
that shows in the console "In the next month you'll get <present>",
and and a function named givePresent(present) that shows in the console 
"Please get from us <present>". 
Create also a function orderInInternetShop(present,callback) 
that writes in the console "Thanks, we've got your order", 
runs setTimout for 1.5 sec, and shows in the console 
"Your order is ready, sorry for the delay,"
and uses the callback with the present .
Run forEach for the "presents" array and inside run once 
orderInInternetShop with the callback of givePresent and
once with the callback argument of nextMonth
*/

const presents = ['free delivery','rubber duck','10 sheq for the next purchase','colorful catalog']

function nextMonth(present) {

}

function givePresent(present) {

}

function orderInInternetShop(present,callback) {
  console.log("Thanks, we've got your order");

}

/* QUESTION 016 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ 
/* QUESTION: Create a function named waitMoreHours(num)  
that shows in the console "You can wait <num> hours more",
and and a function named waitMoreMinutes(num) that shows in the console 
"You can wait <num> minutes more" and a function named 
waitMoreSeconds(num) that shows in the console 
"You can wait <num> seconds more". 
Create also a function queueAtADentist(num,callback) 
that writes in the console "Welcome to the queue at the Dentist's", 
runs setTimout for 2.5 sec, and shows in the console 
"You've already waited for so long,"
and uses the callback with the num .
Run forEach for the "numAr" array and inside run once 
queueAtADentist with the callback of waitMoreMinutes,
after that with the callback of waitMoreSeconds and
once with the callback argument of waitMoreHours.
*/

const numAr = [2, 5, 10, 3, 4]

function waitMoreHours(num) {
  
}

function waitMoreMinutes(num) {
  
}

function waitMoreSeconds(num) {
  
}

function queueAtADentist(num,callback) {
  console.log("Welcome to the queue at the Dentist's");

}

/* QUESTION 017 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ 
/* QUESTION:

Apply a filter with a test of regular expression to the given array 
to only include elements that contain the word "apple" in any case. */

const fruits = ['apple', 'Banana', 'APple', 'kiwi', 'pineapple'];

const filteredFruits = 'your code'
console.log(filteredFruits);

/* QUESTION 018 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ 
/* QUESTION:

Using map and regular expression, create new array with the same countries and
only in the cases that the name of the country ends with "il","el","an" or "ic",
no matter the case, pass to map the capitalized country name.
*/

const countries = ['usa', 'netherlands', 'jAPAN', 'BRazIL', 'israel', 'czech republic'];
// your code
console.log(capitalizedCountries);

/* QUESTION 019 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ 
/* QUESTION: Filter the elements containing "car" in any case. */
const vehicles = ['Car', 'bicycle', 'Carrot', 'motorcycle', 'raceCAR'];

const filteredVehicles = 'your code';
console.log(filteredVehicles);

/* QUESTION 020 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ 
/* QUESTION: 

Replace all instances of "o" and 'i' in any case with "X" in each word
and create the resulting array using map().
*/

const words = ['Hello', 'Good', 'Morning', 'World', 'O-lala','Ai!'];

const replacedWords = 'your code';
console.log(replacedWords);

/* QUESTION 021 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ 
/* QUESTION: Filter and transform the words that end with "ing" to lowercase.
*/

const verbs = ['Running', 'Swimming', 'Eating', 'jumpING', 'Playing Bingo'];

const filteredAndTransformed = 'your code';
console.log(filteredAndTransformed);

/* QUESTION 022 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ 
/* QUESTION: use \d,\D,\w,\w,\s or \S to hide all the digits in
  the phones by asterisks "*" - use map to create "hiddenPhones" array */

  const phones = ['053-456-66-77', '055-123-23-23', '055-555-5555', '09-678-6789'];

  const hiddenPhones = 'your code';
  console.log(hiddenPhones);

/* QUESTION NUMBER: 023 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which of the following is NOT a requirement 
for recursion to work correctly? */
/* ANSWERS: 
a) Proper middle step
b) Proper function arguments
c) Infinite loop
d) Clearly defined termination condition
*/

/* QUESTION NUMBER: 024 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the base case in recursion? */
/* ANSWERS: 
a) The final step where the function produces the desired output
b) The starting point or condition where the function returns without a recursive call
c) The middle step in the recursive function
d) The output of the recursive function
*/

/* QUESTION NUMBER: 025 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the base case in a recursive function? */
/* ANSWERS: 
a) The point at which the recursion stops
b) The starting point of the recursion
c) The maximum depth of the recursion
d) The smallest value in the recursion
*/

/* QUESTION NUMBER: 026 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which of the following statements about recursion is true? */
/* ANSWERS: 
a) Recursion is more efficient than iteration in most cases
b) Recursion can lead to infinite loops if not implemented correctly
c) Recursion cannot be used to perform mathematical calculations
d) Recursion is only applicable to string operations
*/

/* QUESTION NUMBER: 027 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the output of the following code snippet?  
function factorial(n) {  

  if (n === 0) return 1;  
  
  return n * factorial(n - 1);

}

console.log(factorial(5)); */

/* ANSWERS: 
a) 15
b) 120
c) 20
d) 25
*/

/* QUESTION NUMBER: 028 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the purpose of a base case in a recursive function? */

/* ANSWERS: 
a) To define the terminating condition.
b) To handle errors during recursion.
c) To define the maximum number of recursion steps.
d) To ignore certain input values.
*/

/* QUESTION NUMBER: 029 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which of the following is an example of 
a correct working recursive function? */

/* ANSWERS: 
a) function sum(n) {
    if (n <= 1) return 1;
      else return n + sum(n - 1);
   }
b) function sum(n) {
    return 1 + sum(n);
   }
c) function sum(n) {
     if (n <= 1) return 1;
      else return n * sum(n - 1);
   }
d) function sum(n) {
     return sum(n) + 1;
   }
*/

/* QUESTION NUMBER: 030 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which of the following functions cannot be implemented using recursion? */

/* ANSWERS: 
a) factorial
b) Fibonacci series
c) GCD (Greatest Common Divisor)
d) All of the mentioned functions can be implemented using recursion
*/

/* QUESTION NUMBER: 031 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the base case in recursive functions? */

/* ANSWERS: 
a) The condition that stops the recursion
b) The condition that defines when the function should start executing
c) The condition that calls another recursion
d) The condition that checks for errors
*/

/* QUESTION NUMBER: 032 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is recursion? */

/* ANSWERS: 
a) When a function calls itself
b) When a function calls another function
c) When a function is called only once
d) When a function cannot be called
*/

/* QUESTION NUMBER: 033 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a regex pattern to match several specific file extensions in a string, 
   like ".jpg", ".png", ".pdf". Use group notation () */

/* INITIAL CODE: */
let reg33 = 'your code'

/* QUESTION NUMBER: 034 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a regex pattern to match URLs that start with 
   "http://" or "https://".  Use "group" notation with () */

/* INITIAL CODE: */
let reg34 = 'your code'

/* QUESTION NUMBER: 035 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a function to check if a string starts with 
 a vowel (a, e, i, o, u, in lowercase or uppercase). */

/* INITIAL CODE: */
const str35 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

function startsWithVowel(str) {
  // your code
}

str35.forEach(str => console.log(startsWithVowel(str)));

/* QUESTION NUMBER: 036 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Create a function to check if a string ends with a lowercase letter */

/* INITIAL CODE: */
const str36 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

function endsWithLowerCase(str) {
  // your code
}

str36.forEach(str => console.log(endsWithLowerCase(str)));

/* QUESTION NUMBER: 037 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a function to check if a given string starts with an uppercase letter. */

/* INITIAL CODE: */
const str37 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

function startsWithCapital(str) {
  // your code
}

str37.forEach(str => console.log(startsWithCapital(str)));

/* QUESTION NUMBER: 038 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a function that checks whether a given string contains any digits. */

/* INITIAL CODE: */
const str38 = ['Nice','4u','precious','&%*',' -','555-5555','','w0nder']

function containsDigits(str) {
  // your code
}

str38.forEach(str => console.log(containsDigits(str)));

/* QUESTION NUMBER: 039 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a regular expression test that matches a string containing only lowercase letters. */

/* INITIAL CODE: */
const str39 = ['Nice','4u','precious','&%*',' -','555-5555','','w0nder']

function onlyLowerCaseLetters(str) {
  // your code
}

str39.forEach(str => console.log(onlyLowerCaseLetters(str)));

/* QUESTION NUMBER: 040 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a regular expression that matches a string containing either 'apple' or 'banana' in any case. */

/* INITIAL CODE: */
let reg40 = 'your code'

/* QUESTION NUMBER: 041 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a regular expression that matches a string that starts with 'cat' or ends with 'dog' in lower case.  */

/* INITIAL CODE: */
let reg41 = 'your code'

/* QUESTION NUMBER: 042 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that should check if a string contains only uppercase letters. */

/* INITIAL CODE: */
const regex42 = /[A-Z]/;
const str42 = 'HELLO';
console.log(regex42.test(str42));

/* QUESTION NUMBER: 043 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that should check if a string ends with the letter 't'. */

/* INITIAL CODE: */
const regex43 = /[t$]/;
const str43 = 'let';
console.log(regex43.test(str43));

/* QUESTION NUMBER: 044 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that should check if a string starts with the letter 'A'. */

/* INITIAL CODE: */
const regex44 = /^A/;
const str44 = 'Apple';
console.log(str44.test(regex44));

/* QUESTION NUMBER: 045 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix a code that should replace 
   all the occurrences of a digit in a string by $. */

/* INITIAL CODE: */
let regex45 = /[\d]/g;
let str45 = `The old price is 45 sheq, the new price is 44.99 sheq`;
str45.replace(regex45,'$');
console.log(str45);

/* QUESTION NUMBER: 046 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that replaces all the occurrences 
    of a lowercase vowel (a, e, i, o, u) in a string by '*'. */
  
/* INITIAL CODE: */
let regex46 = /[aeiou]/ig;
let str46 = `Ashdod is a beautiful white city on Mediterranean sea.`;
console.log(str46.replace(regex46,'*'));

/* QUESTION NUMBER: 047 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that replaces all the occurrences of the word 
'function' or word 'arrow' in any case in a string by 'action'. */
  
/* INITIAL CODE: */
let str47 = `The main function of a bow is to send an arrow onto a target,
but what if you have no more ARROWS?`;
console.log(str47.replace(/[bow|arrow]/ig,'action'));

/* QUESTION NUMBER: 048 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */
/* QUESTION: Fix the code that uses a function to check if any string 
of the given array contains the word 'JavaScript' at the beginning. */
  
/* INITIAL CODE: */
const str48_first = ['Or Python or JavaScript','JavaScript is a powerful language',
'JS is developing and advancing','I like JS'];
const str48_second = ['Or Python or JavaScript','JAVASCRIPT is a powerful language',
'JS is developing and advancing','I like JS'];

function checkIfAnyBeginsWithJavaScript(ar) {
  let regexp48 = new RegExp("^JavaScript");
  return ar.every(str => regexp48.test(str));
}

console.log(checkIfAnyBeginsWithJavaScript(str48_first));
console.log(checkIfAnyBeginsWithJavaScript(str48_second));

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

/* QUESTION NUMBER: 061 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a program that logs the number of seconds 
that have passed every second, stop when 16 sec have passed */
  
/* INITIAL CODE: */
let seconds61 = 0;

/* QUESTION NUMBER: 062 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a program that displays a countdown from 5 to 1 
with an interval of 1 second using setInterval. 
After the countdown finishes, print 'Boom!' */
  
/* INITIAL CODE: */
let count62 = 5;

/* QUESTION NUMBER: 063 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a program that prints 'Hello, world!' every 3 seconds 
using setInterval.
 Stop the interval after 9 seconds. */
  
/* INITIAL CODE: */
let sec63 = 0;

/* QUESTION NUMBER: 064 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a program that prints 'Hello, world, again!' 
every 3 seconds using setInterval. 
Stop the interval after 9 seconds - use for this setTimeout.  */
  
/* INITIAL CODE: */
let intervalId64 = 'your code';

/* QUESTION NUMBER: 065 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: CHALLENGE Write a function that prints 'Howdy, World!' 
five times with 1 second intervals using setTimeout and 
clearTimeout(just for the case - to clear all the timeouts at the end). 
Use a loop to call setTimeout, and store the timeout IDs in an array, 
myTimeouts. Define the function named startTimeouts.  */
  
/* INITIAL CODE: */
function startTimeouts() {

}

startTimeouts();

/* QUESTION NUMBER: 066 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Write a function that prints string from the given array 
every second and a half using setInterval. 
Stop the interval when the array ends.
The given array contains at least one fruit */
  
/* INITIAL CODE: */

const fruits66 = ['banana','grapes','avocado','pineapple','apple','orange','lemon']
function fruitIntervals(ar) {

}

fruitIntervals();

/* QUESTION NUMBER: 067 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which logical operator is used to check if either condition A or condition B is true? */
  
/* ANSWERS:
a) &&
b) || 
c) !
d) &
*/

/* QUESTION NUMBER: 068 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the result of the expression 
10 > 5 ? 'Yes' : 'No' 
in JavaScript? */
  
/* ANSWERS:
a) 'Yes'
b) 'No' 
c) true
d) false
*/

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

/* QUESTION NUMBER: 071 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */
/* QUESTION: Which of the following is the correct syntax for using 
the spread operator to copy an array? */
  
/* ANSWERS:
a) [...arr]
b) {...arr}
c) ...arr
d) arr...
*/

/* QUESTION NUMBER: 072 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the result of the following expression?
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); */
  
/* ANSWERS:
a) [[1, 2, 3], 4, 5]
b) [1, 2, 3, [4, 5]]
c) [1, 2, 3, [...arr1, 4, 5]]
d) [1,2,3,4,5]
*/

/* QUESTION NUMBER: 073 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Given the array arr731 = [1, 2, 3], 
create a new array arr732 that is an exact copy of arr1 
using the spread operator. */

/* INITIAL CODE */

const arr731 = [1, 2, 3];
const arr732 = 'your code';
console.log(arr732);

/* QUESTION NUMBER: 074 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION:  Create a function sum74 that takes an unknown number 
of arguments and returns the sum of all the arguments. 
Use the rest operator. */

/* INITIAL CODE */

function sum74() {
  
}

console.log(`sum74(5,46,7) = `,sum74(5,46,7));
console.log(`sum74(-3,11,29,0.1,3.5) = `,sum74(-3,11,29,0.1,3.5));

/* QUESTION NUMBER: 075 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION:  Create a function 'concatenateStrings75' that takes 
any number of string arguments 
and returns their concatenation using the rest operator. */

/* INITIAL CODE */

function concat75() {
  
}

console.log(`concat75('Bye-bye',',','alligator') = `,concat75('Bye-bye',',','alligator'));
console.log(`concat75('You ','and ','me',' - ','we ') = `,concat75('You ','and ','me',' - ','we '));

/* QUESTION NUMBER: 076 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION:  Create a function 'multipl76' that takes any number 
of arguments and returns their product (if there is zero, 
  the function does not multiply it), using the rest operator. */
  
  /* INITIAL CODE */
  
  function multipl76() {
    
  }
  
  console.log(`multipl76(7,8,9,0) = `,multipl76(7,8,9,0));
  console.log(`multipl76(-1,0.5,20,23,7) = `,multipl76(-1,0.5,20,23,7));

/* QUESTION NUMBER: 077 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION:  Consider the given object: 
const person77 = { firstName77: 'John', lastName77: 'Doe', age77: 30 }; 
Use destructuring to extract the values of firstName77 and 
lastName into separate variables firstName and lastName77.  */

/* INITIAL CODE */

const person77 = { firstName77: 'John', lastName77: 'Doe', age77: 30 };

/* QUESTION NUMBER: 078 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: Using array destructuring, swap the values of 
the variables 'a' and 'b'. 
let a = 5; let b = 8;  */

/* INITIAL CODE */

let a = 5; 
let b = 8;

/* QUESTION NUMBER: 079 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Destructure the following object to obtain the values 
of its properties: 
const person79 = { name79: 'John', age79: 25, profession79: 'developer' } */

/* INITIAL CODE */

const person79 = { name79: 'John', age79: 25, profession79: 'developer' }

/* QUESTION NUMBER: 080 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Given three variables, a80, b80, and c80, 
assign the maximum of the three to the variable maxNum80. 
Write the code using nested ternary operator. */

/* INITIAL CODE */

let a80 = 4, b80 = 9, c80 = 7;

/* QUESTION NUMBER: 081 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Go over array of objects, where each object 
contains peson's name, age and if has a driving lisense. 
Use ternary operator to add to each object recomendation: 
'You cannot drive' baby' - if the person is less than 16, 
'Go learn driving!" - if the person is 16 or more 
and has no driving lisense, 
"Drive as you wish!" - in the case when the person is 16 
                       or more and has driving lisense. */
  
/* INITIAL CODE */

const persons81 = [
  {name:'Dani',age:'11',hasDrivingLicense:false},
  {name:'Dvora',age:'20',hasDrivingLicense:false},
  {name:'Romi',age:'16',hasDrivingLicense:false},
  {name:'Bracha',age:'101',hasDrivingLicense:true},
]

/* QUESTION NUMBER: 082 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: Array contains colors, you mix blue color with each 
of them. 
If it was red, it become purple, 
if it was white, it become lightblue, 
if it was green, it becomes turquoise, 
if it was yellow, it becomes green. 
Write the code using nested ternary operator 
and change the colors in the array in accordance. */

/* INITIAL CODE */

const colors82 = ['red','green','red','yellow','yellow','red','white','white']

/* QUESTION NUMBER: 083 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: LIGHT CHALLENGE. Create a function countDown83 that takes a number n 
as a parameter and counts down from n to 1 with a delay of 1 second 
between each number. 
Use setTimeout to achieve this. */

/* INITIAL CODE */

function countdown83(n) {
  
}

countdown83(15);

/* QUESTION NUMBER: 084 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Each second, starting from the second number 1 show chamshir
row in showChamshir, and if there no more rows, start from the beginning.
Also show seconds, from 0 to 7 in showSeconds div. Stop at the 7th second. 
Use setTimeout to achieve this. */

/* INITIAL CODE */

const showSeconds = document.querySelector('#q084  .seconds > div');
const showChamshir = document.querySelector('#q084  .chamshir > div');
const rows84 = ['היא חיכתה שם יפהפיה','כל כולה אומרת פנויה',
'קרובה, מרגשת','שהחלטתי לגשת','ולתפוס לי מיד חניה']

/* QUESTION NUMBER: 085 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the purpose of using callbacks in async functions?
  
/* ANSWERS:
a) Each answer is right
b) To handle more asynchronous operations in JavaScript
c) To perform the steps that come after the async operation has ended
d) To handle the error of the async operation
*/

/* QUESTION NUMBER: 086 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What will return the next check for the values 
of the next array?  
/^[%?A-C]/.test(str)   
const ar86 =  ['A cat','The Dog','%new name%','The % of them is big','Big Bang']
*/

/* ANSWERS:
a) true,false,true,false,true
b) true,false,true,true,false
c) false,true,false,true,false
d) false,false,true,false,true
*/

/* QUESTION NUMBER: 087 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What Will Return The Next Check For The Values 
Of The Next Array? 
let reg87 = /[A\-D]/   
reg87.test(str) 
const ar87 = ['A Cat','The Dog','%Cat And Mouse%','The % Of Them Is Big','Big Bang']  
*/

/* ANSWERS:
a) false,true,true,false,false
b) true,false,true,false,false
c) true,true,true,false,true
d) true,true,true,false,false
*/

/* QUESTION NUMBER: 088 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: Create a recursive function called factorial88 that takes 
an argument n and returns its factorial. Initialize n with 
a non-negative integer value. */

/* INITIAL CODE */

function factorial88(n) {

}

console.log(`factorial: `,factorial88(7));
console.log(`factorial: `,factorial88(0));
console.log(`factorial: `,factorial88(1));

/* QUESTION NUMBER: 089 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: Create a recursive function called countdown89 that takes 
an argument n and prints the numbers from n to 1. 
Initialize n with a positive integer value. */

/* INITIAL CODE */

function countdown89(n) {
  
}

console.log(`countdown: `);
countdown89(7);
console.log(`countdown: `);
countdown89(1);

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

/* QUESTION NUMBER: 093 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What special character is used 
to match the beginning of a string in regex?
*/

/* ANSWERS:
a) ^
b) $
c) *
d) ?
*/

/* QUESTION NUMBER: 094 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */
/* QUESTION: Use RegExp class to create a regex pattern to check 
if a string contains white spaces in the beginning or in the end */

/* INITIAL CODE */

let reg94 = new RegExp()

/* QUESTION NUMBER: 095 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */
/* QUESTION: Use RegExp class to create a regex pattern that matches 
any string starting with 'a' or 'A' and ending with 't' or 'T'. */

/* INITIAL CODE */

let reg95 = new RegExp()

/* QUESTION NUMBER: 096 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Start interval timer that prints a smiley every 2.5 seconds
inside showSmileys96 div. 
Add to the listener of btnStop96 an arrow function that enables us 
to cancel printing the smileys. */

/* INITIAL CODE */

const btnStop96 = document.querySelector('#q096 .btn');
const showSmileys96 = document.querySelector('#q096 .smileys > div');

/* QUESTION NUMBER: 097 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is setInterval() method used for?
*/

/* ANSWERS:
a) Executing a function only once after a specified delay.
b) Setting a delay (in milliseconds) and executing a function repeatedly.
c) Clearing the interval previously set by setInterval().
d) Executing a series of functions concurrently.
*/

/* QUESTION NUMBER: 098 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Given an array 
arr98 = [1, 2, 3], 
create a new array newArr98 
that adds an additional element 4 at the end, using the spread operator. */

/* INITIAL CODE */

const arr98 = [1, 2, 3];
const newArr98 = 'your code';
console.log('newArr98: \n',newArr98);

/* QUESTION NUMBER: 099 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Given two arrays 
arr991 = [1, 2] 
and 
arr992 = [3, 4], 
create a new array newArr99 that combines the elements of both arrays 
using the spread operator. */

/* INITIAL CODE */

const arr991 = [1, 2];
const arr992 = [3, 4];
const newArr99 = 'your code';
console.log('newArr99: \n', newArr99);

/* QUESTION NUMBER: 100 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Given the object 
grapes100 = {color:'white',taste:'very sweet',weightKg: 34}, 
create a new object newGrapes100 that contains the same properties 
as grapes100 using the spread operator. */

/* INITIAL CODE */

const grapes100 = {color:'white',taste:'very sweet',weightKg: 34};
const newGrapes100 = 'your code';
console.log('newGrapes100: \n', newGrapes100);

/* QUESTION NUMBER: 101 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */
/* QUESTION: CHALLENGE: Given a nested array, destructure 
the elements 'two' and 'six' into two separate variables. */

/* INITIAL CODE */

const arr101 = [1, 2, [3, 4, ['five', 'six']]];

// your code

console.log(six)
console.log(two)

/* QUESTION NUMBER: 102 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Destructure the object person102 
into variables name102 and age102. */

/* INITIAL CODE */

const person102 = {
  name: 'John Doe',
  age: 30
};

// your code

/* QUESTION NUMBER: 103 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Given an array [1, 2, 3, 4], destructure it and 
store 1 in a variable var1031 and the rest in an array named arr1032. */

/* INITIAL CODE */

const arr103 = [1, 2, 3, 4];

//your code

/* QUESTION NUMBER: 104 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Destructure the array 
['apple', 'banana', 'orange', 'grape'] 
into variables fruit1041, fruit1042, and remainingFruits104. */

/* INITIAL CODE */

// ['apple', 'banana', 'orange', 'grape']

/* QUESTION NUMBER: 105 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Destructure the array 
['John', 'Doe', 30] 
into variables firstName105, lastName105, and age105. */

/* INITIAL CODE */

// ['John', 'Doe', 30]

/* QUESTION NUMBER: 106 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */
/* QUESTION: Destructure the array 
ar106 = ['apple', 'banana', 'orange'] 
into individual variables greenFruit, yellowFruit, orangeFruit. 
After that destructure the object 
obj106 = {greenFruit:'avocado',yellowFruit:'lemon',orangeFruit: 'persimmon'}
 while changing the names of the variables to greenFruit2, yellowFruit2, 
 orangeFruit2 */

/* INITIAL CODE */

const ar106 = ['apple', 'banana', 'orange'] 
 
const obj106 = {greenFruit:'avocado',yellowFruit:'lemon',orangeFruit: 'persimmon'}
