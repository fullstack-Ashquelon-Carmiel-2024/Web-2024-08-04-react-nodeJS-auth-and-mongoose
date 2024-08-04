
// 001

/* RIGHT ANSWER: a, c, d, e, b */

// 002

const arWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arWithoutDuplicates = [...new Set(arWithDuplicates)];
console.log(arWithoutDuplicates);

// 004

/* RIGHT ANSWER: They must have a termination condition 
to avoid infinite recursion */

// 005

/* CORRECT CODE - this is only the initial one */

/* INITIAL CODE: */
class Square05 {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return 4 * this.side;
  }
}

// 006 totally unchecked

/* CORRECT CODE ? */

function sumOfDigits(n) {
  if (n < 10) return n;
  return n % 10 + sumOfDigits(Math.floor(n / 10));
}
console.log(sumOfDigits(5612304));

// 007

/* RIGHT ANSWER: 1, 4, 7, 5, 6, 2, 3 */

// 008 totally not checked

/* CORRECT CODE ? */

function startPrinting() {
  let timeoutArray08 = [];
  for (let i = 0; i < 10; i++) {
      let id = setTimeout(() => {
          console.log('JavaScript is fun!');
          if (i === 9) {
              timeoutArray08.forEach(clearTimeout);
          }
      }, i * 2000);
      timeoutArray08.push(id);
  }
}

startPrinting();

// 009

/* RIGHT ANSWER: To handle asynchronous operations and execute code after a task completes. */


// 013

/* RIGHT ANSWER: Executes a function only once after a specified delay. */

// 014 totally not checked

/* CORRECT CODE ? */

function runSequence() {
  let timeoutArray = [];
  for (let i = 0; i < 3; i++) {
      let startId = setTimeout(() => {
          console.log('Start');
          let runningId = setTimeout(() => {
              console.log('Running');
              if (i === 2) {
                  console.log('Finished');
                  timeoutArray.forEach(clearTimeout);
              }
          }, 1000);
          timeoutArray.push(runningId);
      }, i * 2000);
      timeoutArray.push(startId);
  }
}

runSequence();

// 15

/* RIGHT ANSWER: "Fetching a snack..." followed 
   by "Enjoy your <some random snack>!"
   and "Fetching a snack..." followed by 
   "No thanks, I don't want <some random snack>." */

// 16

/* RIGHT ANSWER: super.method() */

// 20

/* RIGHT ANSWER: 8 */

// 21

/* RIGHT ANSWER: extends */

// 26

/* RIGHT ANSWER: 6 */

// 32

/* RIGHT ANSWER: By ensuring 
there is a base case that will terminate the recursion */

// 38

/* RIGHT ANSWER: It simplifies the code for problems 
   that can be broken down into smaller, similar problems*/

// 44

/* RIGHT ANSWER: function infiniteRecursion() { infiniteRecursion(); } */

// 48

/* CORRECT CODE: */

class Square48 {
  constructor(side) {
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

// 50

/* CORRECT CODE: */

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));