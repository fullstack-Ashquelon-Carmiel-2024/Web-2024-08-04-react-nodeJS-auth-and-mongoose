module.exports = {

    // Get the list of cuisines with their id
    getCuisines: async (req,res) => {

        let querySQL = 'SELECT id, name FROM cuisine';

        try {

            const result = await dbQuery(querySQL);
            res.send(result);

        } catch(err) {

            res.status(500).send({message:err.message});

        }

    }


}