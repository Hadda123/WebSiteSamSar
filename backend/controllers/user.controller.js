const user = require("../models/user")
const bcrypt = require ("bcrypt")

const ValidateRegister = require("../verification/Register");
const ValidateSendSMS = require("../verification/SendSMS");
const ValidateVerification = require("../verification/Verification");
const ValidateConnect = require("../verification/Connect");
const { exists } = require("../models/user");
//sendSMS

exports.sendSMS=async(req,res)=>{

  //  const { errors, isValid } = ValidateSendSMS(req.body);
   // try {
    //  if (!isValid) {
   //     res.status(404).json(errors);
    //  } else {





    try {

      const  {numTel} = req.body;
      console.log(numTel)
   


       const client = require('twilio')("AC6dfac62dabd91612709e55369439ba18", "18046dd0a60b4dc49828d0753cd447e7");


            client.verify.services("VAa994e6b4b67f48b2e22028c45fd09d7a").verifications.create({
                to: "+216" + numTel,
                channel: "sms" === 'call' ? 'call' : 'sms'
            })
                .then(data => {
                    res.status(200).send({
                        msg: 'Code envoyé ', reponse: true
                   

                    })
                })
                .catch(error => {
                    res.json({
                        msg: " error d'envoi", reponse: false
                    })
                })
            
           

    }  catch (error) {
        console.log(error)
        return res.status(500).send({msg:'error serveur'})
    }

    

       

  //  }
   // catch (error) {
     //   res.status(404).json(error.message);
      
}
//verifySMS 
exports.verifySMS=async(req,res)=>{







    try {
        const { numTel, codeSaisie } = req.body

        console.log(codeSaisie)
            const client = require('twilio')("AC6dfac62dabd91612709e55369439ba18", "18046dd0a60b4dc49828d0753cd447e7");

            client.verify.services("VAa994e6b4b67f48b2e22028c45fd09d7a").verificationChecks.create({
                to: "+216" + numTel,
                code: codeSaisie
            })
                .then(data => {
                    if (data.status === "approved") {
                        res.status(200).send({
                            msg: 'succées', reponse: true
                        })
                    } else {
                        res.status(400).send({
                            msg: 'code invalide', reponse: false
                        })

                    }
                })

    
    }  catch (error) {
        console.log(error)
        return res.status(500).send({msg:'error serveur'})
    }

      

}
    
// add new user
exports.addNewUser=async(req,res)=>{

    const { errors, isValid } = ValidateRegister(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {







try {
    const newuser= new user({
        login: req.body.login,

        //const hash = bcrypt.hashSync(req.body.password, 10); //hashed pass
       password: bcrypt.hashSync(req.body.password, 10),
       // password: req.body.password,
        numTel: req.body.numTel,
        sexe: req.body.sexe,
        dateNaissance: req.body.dateNaissance,
        roleUser: req.body.roleUser,
        dateCreation: new Date
    })
    await newuser.save();
    console.log('saved')
    return res.status(200).send({msg:'success ', newuser})
} catch (error) {
    console.log(error)
    return res.status(500).send({msg:'error serveur'})
}
}
    }
 catch (error) {
    res.status(404).json(error.message);
  }
}



//se connecter 

exports.connectUser = async(req,res)=>{

    const { errors, isValid } = ValidateConnect(req.body);
    try {
    //   if (!isValid) {
    //     res.status(404).json(errors);
    //   } 

    const { login, password } = req.body
    const newuser = await user.findOne({login})
    console.log(login)
    console.log(password)
    console.log(newuser.password)
        if (newuser) {
            
            bcrypt.compare(password, newuser.password, function (err, result) {
                
                if (err) {
                    console.log(err)
                    res.status(400).send({
                        msg: 'Vous netes pas connecter', reponse: false
                    }) 
                }

                if(result){
                    res.status(200).send({
                        msg: 'Vous etes connecter', reponse: true, id:newuser._id
                    })
                }

            }
        )}
        else{
            res.status(400).send({
                msg: 'Password or Login incorrect', reponse: false
            })
        }

         } catch (error) {
            res.status(404).json(error.message);
            }
}
                
//}
// get all user
exports.getAllUser=async(req,res)=>{
    try {
        let users= await user.find({}).sort({_id:-1})
        return res.status(200).send(users)
    } catch (error) {
       return res.status(500).send({msg:'error serveur'}) 
    }
}



//  get one user
exports.getOneUser=async(req,res)=>{
    try {
        let User= await user.findById(req.params.id)
        return res.status(200).send({msg:'success',User})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'}) 
    }
}
// update
exports.updateOneUserById=async(req,res)=>{
    try {
        let findUser= await user.findById(req.params.id)
        if(!findUser){
            return res.status(400).send({ errors: [{ msg: "no  User with this id" }] })
        }
        let Imm=await user.updateOne({_id: req.params.id},{ $set: { ...req.body} })
        if (Imm.modifiedCount) {
            return res.status(200).send({ msg: "updating User succ" });
        }
    return res.status(400).send({ errors: [{ msg: "no update for User" }] })
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }
}

// delete
exports.deleteOneUserById=async(req,res)=>{
    try {
        let findUser= await user.findById(req.params.id)
        if(!findUser){
            return res.status(400).send({ errors: [{ msg: "no  User with this id" }] })
        }
        await user.deleteOne({ _id: req.params.id })
        return res.status(200).send({msg:'delete sucess'})
    } catch (error) {
        return res.status(500).send({msg:'error serveur'})
    }


}