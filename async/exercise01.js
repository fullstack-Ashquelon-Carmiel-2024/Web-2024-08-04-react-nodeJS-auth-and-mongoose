console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3)).then(() => console.log(8));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// To the Execution stack  => console.log(1)

// console.log(1) shows 1

// The Browser runs setTimeout(() => console.log(2));

// No "pending", resolved immediately, to the queue of MICROTASKS => console.log(3); 

// No "pending", resolved immediately, to the queue of MICROTASKS => setTimeout(() => console.log(4))); 

// No "pending", resolved immediately, to the queue of MICROTASKS => console.log(5); 

// The Browser runs setTimeout(() => console.log(6));

// To the Execution stack  => console.log(7)

// console.log(7) shows 7


// Event Loop sees that Execution Stack is Empty and goes to MICROTASK QUEUE - as MICROTASK QUEUE
// has the highest priority

// console.log(3) shows 3

// Now this promice is resolved and console.log(8) is added to MICROTASKS queue

// The Browser runs setTimeout(() => console.log(4));

// console.log(5) shows 5

// console.log(8) shows 8

// Now the queue of MICROTASKS is EMPTY, and EVENT LOOP goes to the MACROTASKS (callback QUEUE)

// console.log(2) shows 2
// console.log(6) shows 6
// console.log(4) shows 4
// 1, 7, 3, 5, 8, 2, 6, 4



