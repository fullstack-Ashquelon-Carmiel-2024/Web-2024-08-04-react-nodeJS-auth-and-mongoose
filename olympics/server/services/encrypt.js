const bcrypt = require('bcrypt');

module.exports = {

    saltRounds: +process.env.SALT_ROUNDS,

    hashP: async function(str) {

        try {

            let hash = await bcrypt.hash(str, module.exports.saltRounds);
            console.log(`hashed password ${str}: ${hash}`)
            return hash;

        } catch (err) {

            console.log(err.message);
            return err.message;

        }

    }

}