const Sport = require('../model/Sport')

const SportController = {

    getSports: async (req,res)=>{
        try{
            const sport = await Sport.find()
            res.status(200).json(sport)
        }catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: "Internal error"})
        }
    },
    
    
    createSport: async (req,res)=>{
        try{
            const newSport = await Sport.create(req.body)
            res.status(201).json(newSport)
        }catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: err.message})
        }
    },
    
    
    
    updateSport: async(req,res)=>{
        try{
            const updatedSport = await Sport.findByIdAndUpdate(req.params.id, req.body,{
                new:true
            })
            res.status(200).json(updatedSport)
        }
        catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: err.message})
        }
    },
    
    
    deleteSport: async(req,res)=>{
        try{
            await Sport.findByIdAndDelete(req.params.id)
            res.status(204).send()
        }
        catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: "Internal error"})
        }
    }

}

module.exports = SportController