const gouvernorat = require("../models/gouvernorat")

// add new gouvernorat
exports.addNewGouvernorat=async(req,res)=>{
try {
    const newNomgouvernorat = await gouvernorat.findOne({nom:req.body.nom})

    if(newNomgouvernorat){
        return res.send({msg:'Gouvernorat  existe déja.', reponse:false})
    }else{
    const newgouvernorat= new gouvernorat({
        nom: req.body.nom,
        user: req.body.user,
    })
    await newgouvernorat.save();
    console.log('saved')
    return res.status(200).send({msg:'success ', newgouvernorat, reponse:true})
}} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}



// get all gouvernorat
exports.getAllGouvernorat=async(req,res)=>{
    try {
        let gouvernorats= await gouvernorat.find({}).sort({_id:-1}).populate('user', ['login',
     
        'numTel',
        'sexe',
        'dateNaissance',
        'roleUser',
        'dateCreation'])
        return res.status(200).send(gouvernorats)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one gouvernorat
exports.getOneGouvernorat=async(req,res)=>{
    try {
        let Gouvernorat= await gouvernorat.findById(req.params.id)
        return res.status(200).send({msg:'success',Gouvernorat})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneGouvernoratById=async(req,res)=>{
    try {
        let findGouvernorat= await gouvernorat.findById(req.params.id)
        if(!findGouvernorat){
            return res.status(400).send({ errors: [{ msg: "no  gouvernorat with this id" }] })
        }
        let Imm=await gouvernorat.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating gouvernorate succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for gouvernorat" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneGouvernoratById=async(req,res)=>{
    try {
        let findGouvernorat= await gouvernorat.findById(req.params.id)
        if(!findGouvernorat){
            return res.status(400).send({ errors: [{ msg: "no  gouvernorat with this id" }] })
        }
        await gouvernorat.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}