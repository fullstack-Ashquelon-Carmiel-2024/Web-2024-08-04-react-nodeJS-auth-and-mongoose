
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









/* QUESTION NUMBER: 085 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */
/* QUESTION: What is the purpose of using callbacks in async functions?
  
/* ANSWERS:
a) Each answer is right
b) To handle more asynchronous operations in JavaScript
c) To perform the steps that come after the async operation has ended
d) To handle the error of the async operation
*/

