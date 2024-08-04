const express = require('express');
const path = require('path');
const cors = require('cors');

const fileUpload = require('express-fileupload');

const { getCuisines } = require('./model-sql/cuisine');

/********** VARIABLES **********/
// CHOICE OPERATOR || - if we've got a value we use it, if not we want it to be 3053
let port = process.env.PORT || 3053;

/****** GLOBAL VARIABLES *******/

global.dbQuery ??= require(`./dbsql/db`);

/***** CREATE THE SERVER ******/
const app = express();

/***** VARIABLES OF EXPRESS ******/

/******* MIDDLEWARE *********/
app.use(express.static(path.join(__dirname,'static')));

app.use(express.urlencoded({extended:true})); // if we've got form data, converts it to json
app.use(express.json());// converts json into object

app.use(fileUpload());

// It gives permission to smth from the below URL to get to this API
app.use(
    cors({
    origin: ['http://localhost:3006','http://localhost:3007'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    })
 );

/******* ENDPOINTS *********/
// GET - HTTP method, that asks to bring some
//       data or page, sometimes in accordance to parameters
// POST - HTTP method, that asks to add data to the server,
//       it also uses URL and PARAMETERS, but the main data
//       comes inside BODY
// PUT - like POST, but for UPDATES (sometimes POST is used 
//          instead of PUT for updates),
//       the problem with PUT is that HTML directly 
//       supports only GET and POST methods, so for now we
//        use POST
// DELETE - like GET, but for DELETE,
//         and the same problem as with PUT 
// 
app.get('/',(req,res) => {
    res.send(`<h1>I am the best API ever</h1>`);
});

// endpoint - is HTTP METHOD + URL
app.get('/cuisines',getCuisines);
// app.get('/cuisines/:id',getCuisineById);
// app.post('/cuisines',addCuisine);
// app.put('/cuisines/:id',editCuisineById);
// app.delete('/cuisines/:id',deleteCuisineById);

// app.get('/foods',getFoods);
// app.get('/foods/:id',getFoodById);
// app.post('/foods',addFood);

/*********LISTENER *********/

app.listen(port, () => {

    console.log(`Listening on the port ${port}`)

})