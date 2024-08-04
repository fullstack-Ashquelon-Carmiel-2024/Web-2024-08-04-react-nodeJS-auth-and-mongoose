

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



