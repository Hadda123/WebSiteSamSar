const annonce = require("../models/annonce");

// add new annonce
exports.addNewAnnonce=async(req,res)=>{
try {
    console.log("******")
    //console.log(req.file.path)
    let images;
    if (req.files) {
      
        //console.log(req.files.path)
        let path ='http://localhost:7000/'
        req.files.forEach(function(files, index, arr){
            path=  path + files.path + ',http://localhost:7000/'
        })
        path=path.substring(0, path.lastIndexOf(","))

        //images = "http://localhost:3000/"+req.file.path
        images = path
        console.log(images)
    }


    console.log("***Etape1***")
   console.log( images.split(","))
    const newannonce= new annonce({
        transaction: req.body.transaction,
        titre: req.body.titre,
        description: req.body.description,
        prix: req.body.prix,
        metrage: req.body.metrage,
        surfacehabitable: req.body.surfacehabitable,
        surfaceterrain: req.body. surfaceterrain,
        dateconstruction: req.body.dateconstruction,
        sallebain: req.body.sallebain,
        chambre: req.body.chambre,
        piece: req.body.piece,
        nbreEtage: req.body.nbreEtage,
        SearchImg: images,
        positionMap:req.body.positionMap,


        user:req.body.user,  
 categorie:req.body.categorie,
 gouvernorat:req.body.gouvernorat,
 delegation:req.body.delegation,

 dateCreation: new Date,
      
    })
    await newannonce.save();
    console.log('saved')
    return res.status(200).send({msg:'success ', newannonce})
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}
// get all categorie
// get all delegation
exports.getAllAnnonce=async(req,res)=>{
    try {
        let annonces= await annonce.find().sort({_id:-1}).populate('user', ['_id','login',
     
        'numTel',
        'sexe',
        'dateNaissance',
        'roleUser',
        'dateCreation']).populate('categorie', ['nom']).populate('gouvernorat', ['nom']).populate('delegation', ['nom'])
      
        return res.status(200).send(annonces)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}


    //  get one Annonce
exports.getOneAnnonce=async(req,res)=>{
    try {
        let Annonce= await annonce.findById(req.params.id)
        return res.status(200).send({msg:'success',Annonce})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneAnnonceById=async(req,res)=>{
    try {
        let findAnnonce= await annonce.findById(req.params.id)
        if(!findAnnonce){
            return res.status(400).send({ errors: [{ msg: "no  Annonce with this id" }] })
        }
        let Imm=await annonce.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating Annonce success" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for Annonce" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneAnnonceById=async(req,res)=>{
    try {
        let findAnnonce= await annonce.findById(req.params.id)
        if(!findAnnonce){
            return res.status(400).send({ errors: [{ msg: "no  Annonce with this id" }] })
        }
        await annonce.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }

}





