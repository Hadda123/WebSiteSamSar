const delegation = require("../models/delegation")

// add new delegation
exports.addNewDelegation=async(req,res)=>{
try {
    const newNomdelegation = await delegation.findOne({nom:req.body.nom})

    if(newNomdelegation){
        return res.send({msg:'Delegation  existe déja.', reponse:false})
    }else{
    const newdelegation= new delegation({
        nom: req.body.nom,
        user: req.body.user,
        gouvernorat: req.body.gouvernorat,
    })
    await newdelegation.save();
    console.log('saved')
    return res.status(200).send({msg:'success ', newdelegation, reponse:true})
} }catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}
// get all delegation
exports.getAllDelegation=async(req,res)=>{
    try {
        let delegations= await delegation.find({}).sort({_id:-1}).populate('user', ['login',
     
        'numTel',
        'sexe',
        'dateNaissance',
        'roleUser',
        'dateCreation']).populate('gouvernorat', ['nom'])
      
        return res.status(200).send(delegations )
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one delegation
exports.getOneDelegation=async(req,res)=>{
    try {
        let Delegation= await delegation.findById(req.params.id)
        return res.status(200).send({msg:'success',Delegation})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneDelegationById=async(req,res)=>{
    try {
        let findDelegation= await delegation.findById(req.params.id)
        if(!findDelegation){
            return res.status(400).send({ errors: [{ msg: "no  Delegation with this id" }] })
        }
        let Imm=await delegation.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating Delegation succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for Delegation" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneDelegationById=async(req,res)=>{
    try {
        let findDelegation= await delegation.findById(req.params.id)
        if(!findDelegation){
            return res.status(400).send({ errors: [{ msg: "no  Delegation with this id" }] })
        }
        await delegation.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}