const Role = require('./Role');
const Sport = require('./Sport');
const User = require('./User');

let admin;

async function initRole() {

    try {

        let count = await Role.estimatedDocumentCount();
        if (count !== 0) {
            // console.log('There role documents are already exist');
            return;
        }
        
        new Role({userType: "user"}).save();
        //console.log("added 'user' to roles collection");

        new Role({userType: "moderator"}).save();
        //console.log("added 'moderator' to roles collection");

        admin = new Role({userType: "admin"});
        admin.save();
        //console.log("added 'admin' to roles collection");

        const roles = await Role.find();
        //console.log(roles);

    } catch(err) {
        console.log(err.message)
    }

}

async function initUser() {

    try {

        let YaelArad = await User.findOne({email:'yarad@gmail.com'});
        // console.log(`YaelArad=\n`,YaelArad)
        if (YaelArad) {
            // console.log('The user Yael Arad is already exist');
            return;
        }
        
        let adminType = Role.findOne({userType:'admin'});
        //console.log(`adminType: \n`, adminType);

        new User({name: "Yael Arad", 
                 email:'yarad@gmail.com',password:'123',
                  role: admin._id}).save();
        console.log("added 'Yael Arad' to users collection");

    } catch(err) {
        console.log(err.message)
    }

  }

async function initSport() {

    try {

        let judo = await Sport.findOne({name:'judo'});
        // console.log(`judo=\n`,judo)
        if (judo) {
            // console.log('The sport "Judo" is already exist');
            return;
        }
        
        new Sport({name: "judo", 
                 isOlympic:true,isSummerOlympic:true,
                  img: 'judo_pictogram.svg'}).save();
        //console.log("added 'judo' to sports collection");

    } catch(err) {
        console.log(err.message)
    }

}

// IIFE - Immediate I Functional Expression
(async function () {

    await initRole();
    initUser();
    initSport();

})()

