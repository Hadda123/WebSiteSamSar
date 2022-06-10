const categorie = require("../models/categorie")

// add new categorie
exports.addNewCategorie=async(req,res)=>{
try {

    const newNomcategorie = await categorie.findOne({nom:req.body.nom})

    if(newNomcategorie){
        return res.send({msg:'Catégorie existe déja.', reponse:false})
    }else{

       const newcategorie= new categorie({
            nom: req.body.nom,
            champObligatoire: req.body.champObligatoire,
            user: req.body.user,
            dateCreation: new Date,
        })
        await newcategorie.save();
        console.log('saved')
        return res.status(200).send({msg:'success ', newcategorie, reponse:true})
        }
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}



// get all categorie
exports.getAllCategorie=async(req,res)=>{
    try {
        let categories= await categorie.find({}).sort({_id:-1}).populate('user', ['login',
     
        'numTel',
        'sexe',
        'dateNaissance',
        'roleUser',
        'dateCreation'])
        return res.status(200).send(categories)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one categorie
exports.getOneCategorie=async(req,res)=>{
    try {
        let Categorie= await categorie.findById(req.params.id)
        return res.status(200).send({msg:'success',Categorie})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneCategorieById=async(req,res)=>{
    try {
        let findCategorie= await categorie.findById(req.params.id)
        if(!findCategorie){
            return res.status(400).send({ errors: [{ msg: "no  Categorie with this id" }] })
        }
        let Imm=await categorie.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating Categorie succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for Categorie" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneCategorieById=async(req,res)=>{
    try {
        let findCategorie= await categorie.findById(req.params.id)
        if(!findCategorie){
            return res.status(400).send({ errors: [{ msg: "no  Categorie with this id" }] })
        }
        await categorie.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}