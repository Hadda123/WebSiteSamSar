const reclamation = require("../models/reclamation")

// add new reclamation
exports.addNewReclamation=async(req,res)=>{
try {
    const newreclamation= new reclamation({
        raison: req.body.raison,
        user: req.body.user,
        annonce : req.body.annonce,
        dateCreation: new Date,
      
    })
    await newreclamation.save();
    console.log('saved')
    return res.status(200).send({msg:'success ', newreclamation})
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}
// get all reclamation
exports.getAllReclamation=async(req,res)=>{
    try {  
         let reclamations= await reclamation.find({}).sort({_id:-1}).populate('user', ['_id', 'login',
     
    'numTel',
    'sexe',
    'dateNaissance',
    'roleUser',
    'dateCreation']).populate('annonce', ['_id',
 
    'titre'
   
    ])
        return res.status(200).send(reclamations)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one reclamation
exports.getOneReclamation=async(req,res)=>{
    try {
        let Reclamation= await reclamation.findById(req.params.id)
        return res.status(200).send({msg:'success',Reclamation})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneReclamationById=async(req,res)=>{
    try {
        let findReclamation= await reclamation.findById(req.params.id)
        if(!findReclamation){
            return res.status(400).send({ errors: [{ msg: "no reclamation with this id" }] })
        }
        let Imm=await reclamation.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating reclamation succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for reclamation" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneReclamationById=async(req,res)=>{
    try {
        let findReclamation= await reclamation.findById(req.params.id)
        if(!findReclamation){
            return res.status(400).send({ errors: [{ msg: "no  reclamation with this id" }] })
        }
        await reclamation.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}