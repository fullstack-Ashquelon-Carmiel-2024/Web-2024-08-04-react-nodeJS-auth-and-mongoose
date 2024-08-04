const fs = require('fs');

// 3 args: where from to read, encoding, callback function
// read file passes error and the data that was read into it's callback function
fs.readFile('./data/text01.txt',"utf-8",(err,data)=>{

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


})


////////////////////////////////////////////////////////////////
const config = (() => {
    try {
      return JSON.parse(fs.readFileSync('config.json'));
    } catch (error) {
      return {};
    }
  })();
  //async version:
  
  const config = await (async () => {
    try {
      return JSON.parse(await fs.readFileAsync('config.json'));
    } catch (error) {
      return {};
    }
  })();

////////////////////////////////////////////////////////////////

// THIS WILL NOT WORK:
const fs = require('fs');

try {
  fs.readFile('/some/file/that/does-not-exist', (err, data) => {
    // Mistaken assumption: throwing here...
    if (err) {
      throw err;
    }
  });
} catch (err) {
  // This will not catch the throw!
  console.error(err);
}
//This will not work because the callback function passed to fs.readFile() is called asynchronously. By the time the callback has been called, the surrounding code, including the try…catch block, will have already exited. Throwing an error inside the callback can crash the Node.js process in most cases. If domains are enabled, or a handler has been registered with process.on('uncaughtException'), such errors can be intercepted.
// this will work:
let fileContents;
try {
  fileContents = fs.readFileSync('foo.bar');
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('File not found!');
  } else {
    throw err;
  }
}

////////////////////////////////////////////////////////

