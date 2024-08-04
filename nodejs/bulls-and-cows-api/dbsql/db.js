const mysql = require('mysql2');
// util - to convert usual async functions into promises
const util = require('util');

/*********** DB CONNECTION **********/
const db = mysql.createConnection({
    host: 'localhost', // or '127.0.0.1'
    port: 3306,
    database: 'yummy',
    user: 'root', // TBD: create new, less powerful user
    password: ''
})

// Like db.query() but Promise
// bind(db) makes "db" object to be "this" of "dbQuery" method
const dbQuery = util.promisify(db.query).bind(db);

db.connect(err => {
        
    if (err) {
        // Connection to DB is critical for our app,
        // so if it has failed, we should treat it 
        // and not start the server
        throw(err)
    }
    
    console.log('I fill lucky today. I\'ve connected to DB!!!');
    
})
    
module.exports = dbQuery;
