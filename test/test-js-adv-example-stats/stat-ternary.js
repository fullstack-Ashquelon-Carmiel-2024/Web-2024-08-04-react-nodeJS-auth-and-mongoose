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

