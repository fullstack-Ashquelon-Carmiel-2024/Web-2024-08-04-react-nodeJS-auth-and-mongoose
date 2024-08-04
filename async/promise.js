const fs = require('fs');

// Promise is an object, which returns "success"(resolve)
// or "failure"(reject), and this enables us to
// use .then and .catch syntax.

// then - treatment for success 
// catch - treatment for failure

const zeroOnePromise = new Promise((resolve, reject)=>{

      let result = Math.floor(Math.random()*2);

      if (result === 0) {

          resolve();

      } else {

          reject();

      }
  

})

zeroOnePromise
   .then(()=>{
       console.log('everything  is OK')
   })
   .catch(()=>{
       console.log('Oooops')
   })

fs.promises.readFile('./data/text01.txt',{encoding:"utf8"})
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err.message)
    })