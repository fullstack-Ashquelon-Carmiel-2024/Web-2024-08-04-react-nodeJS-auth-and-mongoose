
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

/* this question is 2 THEMES - recursion and timers */
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


