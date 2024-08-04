const Role = require('../model/Role')

const RoleController = {

    getAllId: async () => {

        try {

            let allRoles = await Role.find();

            return allRoles.reduce((obj,r) => {
                return {...obj,[r.userType]:r.id}
            },{})
            
        } catch(err) {

            console.log(`err: ${err.message}`)
            return {}

        }
    }

}

module.exports = RoleController;