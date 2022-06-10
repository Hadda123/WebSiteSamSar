const commentaire = require("../models/commentaire")

// add new commentaire
exports.addNewCommentaire=async(req,res)=>{
try {

    const newTextcommentaire = await commentaire.findOne({text:req.body.text})

   

       const newcommentaire= new commentaire({
            text: req.body.text,
            user: req.body.user,
            annonce : req.body.annonce,
            dateCreation: new Date,
        })
        await newcommentaire.save();
        console.log('saved')
        return res.status(200).send({msg:'success ', newcommentaire, reponse:true})
        
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}



// get all commentaire
exports.getAllCommentaire=async(req,res)=>{
    try {
        let commentaires= await commentaire.find({}).sort({_id:-1}).populate('user', ['_id', 'login',
     
        'numTel',
        'sexe',
        'dateNaissance',
        'roleUser',
        'dateCreation']).populate('annonce', ['_id',
     
        'titre'
       
        ])
        return res.status(200).send(commentaires)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one commentaire
exports.getOneCommentaire=async(req,res)=>{
    try {
        let Commentaire= await commentaire.findById(req.params.id)
        return res.status(200).send({msg:'success',Commentaire})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneCommentaireById=async(req,res)=>{
    try {
        let findCommentaire= await commentaire.findById(req.params.id)
        if(!findCommentaire){
            return res.status(400).send({ errors: [{ msg: "no  Commentaire with this id" }] })
        }
        let Imm=await commentaire.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating Commentaire succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for Commentaire" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneCommentaireById=async(req,res)=>{
    try {
        let findCommentaire= await commentaire.findById(req.params.id)
        if(!findCommentaire){
            return res.status(400).send({ errors: [{ msg: "no  Commentaire with this id" }] })
        }
        await commentaire.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}