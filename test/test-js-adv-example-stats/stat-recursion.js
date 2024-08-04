

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

