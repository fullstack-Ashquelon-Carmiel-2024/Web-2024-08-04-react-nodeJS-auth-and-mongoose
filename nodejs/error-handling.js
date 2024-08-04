// let results;

// try {

//     results = runSmthProneToError()

// } catch(error) {

//     console.log(error.message)
//     console.log(error.name)
//     console.log(error.stack)

// }

// console.log(results.first)

// TRY-CATCH is SYNCHRONOUS

/* let personJSON1 = `{"firstName": "John","eyeColor":"red"}`;
let personJSON2 = `{"firstName": "John",eyeColor:"red"}`;

let personObj;
console.log('Going to parse the "person" JSON ...') */
/* try {
    personObj = JSON.parse(personJSON2);
    console.log(`Everything has finished OK`)
    console.log(`Eye color of ${personObj.firstName} is ${personObj.eyeColor}`)
} catch (err) {
    console.log(err.message)
} */

// Wrong place to show personObj. 
// console.log(`Eye color of ${personObj.firstName} is ${personObj.eyeColor}`)

try{

    let personJSON1 = `{"firstName": "John","eyeColor":"red"}`;
    let personJSON2 = `{"firstName": "John",eyeColor:"red"}`;
    
    let personObj;
    console.log('Going to parse the "person" JSON ...')
    
    try {
        personObj = JSON.parse(personJSON2);
        console.log(`Everything has finished OK`)
    } catch (err) {
        console.log(err.message)
        throw err
    }
    console.log(`Eye color of ${personObj.firstName} is ${personObj.eyeColor}`)

} catch (e) {

    console.log('***********************\nOUTER CATCH\n**********')
    console.log(e.message)
    console.log(e.name)
    if (e.name === 'SyntaxError' && /^Unexpected token/.test(e.message)) {
        console.log('Sending to the browser: "Site is beign maintained now"')
    } else {
        console.log('Checking other errors')
    }

} finally {

    console.log('FINALLY runs ALWAYS!')

}

console.log('TRY-CATCH is SYNCHRONOUS')
