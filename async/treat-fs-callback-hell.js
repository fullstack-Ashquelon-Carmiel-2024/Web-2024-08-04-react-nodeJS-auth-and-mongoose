/* const fs = require('fs'); */

// 3 args: where from to read, encoding, callback function
// read file passes error and the data that was read into it's callback function
/* fs.readFile('./data/salad.JSON',"utf-8",(err,data)=>{

    if (err) {
        console.log(err.message)
    } else {

        console.log(data)
        fs.mkdir('data02',err => {

            if (err) {
                console.log('while making dir, ERROR:\n',
                             err.message)

            } else {

                console.log('dir created')
                // 3 args: where to write, what to write, callback function 
                // writeFile creates file if it does not exist, and 
                // writes data there
                fs.writeFile('./data02/text02.txt',data,err=>{

                     if (err) {
                         console.log('while writing file, ERROR:\n',err.message)

                     } else {

                          console.log('file has been written')

                     }

                })

            }

        })

    }


}) */

// old way have using promise-based fs methods
/* const { readFile } = require("fs");
const { promisify } = require('util');
const promisifiedReadFile = promisify(readFile);

promisifiedReadFile(__filename, { encoding: "utf8" })
  .then(data => console.log(data)); */


// --------------------

// NodeJS 11 way of using promise-based fs methods
// no util.promisify!!!
/* const { readFile } = require("fs").promises;
readFile(__filename, { encoding: "utf8" })
.then(data => console.log(data)); */

// --------------------

// Since Node.js 14 the fs module provides two ways to use the promises-based file-system methods. 
// The promises are available via require('fs').promises or require('fs/promises').

// Since Node.js v14: use promise-based fs methods
// no util.promisify!!!


const { readFile, mkdir, writeFile } = require("fs/promises");
/* const fsPromises = require("fs/promises");
fsPromises.readFile(__filename, { encoding: "utf8" })
  .then(data => console.log(data));

fsPromises.readFile(__filename, "utf8")
  .then(data => console.log(data)); */ 

// MISSION: use somewhere one more "then" and perform data.json()
// and say, how many cucumbers we should put into the salad
readFile('./data/salad.JSON',"utf-8")
    .then(data => {
        console.log(data)
        console.log(data[0].cucumber)
        return data
    })
    .then(data => JSON.parse(data))
    .then((data) => {
        console.log(`now is object`)
        console.log(data[0].cucumber)
        mkdir('data02')
        return JSON.stringify(data)
    })
    .then((data) => {
        writeFile('./data02/text02.txt',data)
    })
    .catch(err => console.log(err.message))


/* const somePromiseFunction = new Promise((resolve,reject) => {
     // Each promise is a function of class "Promise"
}) */