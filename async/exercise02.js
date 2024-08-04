console.log('Script start'); 

setTimeout(() => {
    console.log('setTimeout'); 
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1'); 
}).then(() => {
    console.log('Promise 2'); 
});

console.log('Script end'); 

// Script start
// Script end
// Promise 1
// Promise 2
// setTimeout