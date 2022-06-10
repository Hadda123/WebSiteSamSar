import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
import { useFetch } from "use-http";
import { useLocalStorage } from "react-use-storage";
import Loading from "../../../components/Loading";
import Navbar from "../../../components/navbar";
// import * as React from 'react';

import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Commentaire from '../../user/home/commentaire'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { textAlign } from "@mui/system";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



export default function MediaCard() {

  const [isconnect, setisconnect, removeisconnect] = useLocalStorage(
    "isconnect",
    false
  );
  const { get, post, response, loading, error } = useFetch(
    "http://localhost:7000"
  );

  
  const [currAnnonce, setCurrAnnonce] = useState({});
  const [annonce, setAnnonces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [IdAnnonceSearch, setIdAnnonceSearch] = React.useState(window.location.pathname.slice(17,window.location.pathname.length))

  const [IdAnnonceSearch, setIdAnnonceSearch] = useState(
    window.location.pathname.split("/information/").join("")
  );
 
  // useEffect(() => {
  //   axios
  //     .get("/api/annonce")

  //     .then((res) => {
  //       (res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(async () => {
    
    const annonce = await get('/api/annonce')
    console.log(annonce)
    console.log(annonce.length)
    setAnnonces(annonce)
    setIsLoading(false);
  }, [])

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <br/>
{/*     
      <div className="h-16 border-b-2 border-pink-400 flex items-center justify-center mb-4 uppercase font-bold">
       
      </div>
     */}<br/><br/><br/>

{annonce.map(

(annonces) => { 
 if  (annonces._id === IdAnnonceSearch){
  return (
    

    <div style= {{textAlign:"center"}}>
<center>
    <Card sx={{ maxWidth: 1200 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
<br/>
<b>Numéro de téléphone: </b> {annonces.user.nom} {annonces.user.prénom} - {annonces.user.numTel} 

<br/><br/>
<AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >

   
 
      {annonces.SearchImg.split(',').map((element, index) => (
 <center>
        <div key={index}>
          {Math.abs(activeStep - index) <= 2 ? (

         
            <Box     
              component="img"
              sx={{
                height: 400,
                display: 'block',
                
                maxWidth: "100%",
                overflow: 'hidden',
                width: 750,
              }}
              src={annonces.SearchImg.split(',')[index].replace(/\\/g, "/")}
              
            />

            


           /* <CardMedia
            component="img"
            height="420"
            image={img[index].replace(/\\/g, "/")}
            alt="green iguana"
          />*/
          ) : null}
        
        </div>  </center>
      ))}
      
    </AutoPlaySwipeableViews>

    <MobileStepper
      steps={annonces.SearchImg.split(',').length}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === annonces.SearchImg.split(',').length - 1}
        >
          Suivant

          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Arrière
        </Button>
      }
    />


      <br/>
      <CardContent>
      <b>Type De Transaction </b>
        <Typography  color="red" >
        {annonces.transaction} 
        </Typography>
        
         <br/>
         <b>Titre :  </b> {annonces.titre}<hr/>
        
         <br/>
         <b>Description :  </b>{annonces.description}<hr/>
        
         <br/>
         <b>Prix : </b>{annonces.prix} <sup><b>DNT</b></sup><hr/>
       
         <br/>
         <b>Metrage :</b>{annonces.metrage} <sup><b>m<sup>2</sup></b></sup>
       
         <br/>

         { 
   
   annonces.surfacehabitable !="" ?
   <>

     <b>Surface Habitable: </b>{annonces.surfacehabitable}<sup><b>m<sup>2</sup></b></sup>
   </>
 
  : null
 
   }
       
         <br/>
    
    
         { 
   
   annonces.surfaceterrain !="0" ?
   <>

<b>Surface Terrain:</b>{annonces.surfaceterrain}<sup><b>m<sup>2</sup></b></sup> <hr/>
<br/>
   </>
 
  : null
 
   }
       
     
       

         { 
   
   annonces.dateconstruction !="0" ?
   <>
 <br/>
 <b>Date De Construction :</b>{annonces.dateconstruction} 
   </>
 
  : null
 
   }  
         
       
         <br/>
         <table style= {{textAlign:"center"}}>
           <tr >
          
             { 
   
             annonces.sallebain !="" ?
             <>
               <th> {annonces.sallebain} </th>
               <td></td>
            <td><img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4372.png" width="20" height="20"/></td>
             </>
           
            : null
           
             }
                       
                       { 
   
   annonces.chambre !="" ?
   <>
   <td></td>
   <td>|</td>
   <td></td>
     <th> {annonces.sallebain} </th>
  <td><img src="https://cdn-icons-png.flaticon.com/512/489/489874.png" width="20" height="20"/></td>
   </>
 
  : null
 
   }
   
            
           </tr>
         </table>

                           { 
   
   annonces.nbreEtage !="0" &&  annonces.nbreEtage !=""  ?
   <>
 <br/>
         <b>Nombre De Etage :</b>{annonces.nbreEtage} 
   </>
 
  : null
 
   }  
        
         <br/>
     
         <b>Date De Création D'annonce :</b>{annonces.dateCreation} 
         <br/><br/>
<hr/>
         <b>gouvernorat:</b>{annonces.gouvernorat.nom} 
         <br/>
       

         <b> delegation :</b>{annonces.delegation.nom} 
         <br/>
       <hr/>
       <br/>
       

       <b> position :</b><Button onClick={()=>{
          window.open(`https://www.google.com/maps/place/${annonces.positionMap}`)
       }}><AddLocationAltIcon/></Button>
       
       <br/>
   
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <br/>
  
    <Commentaire idAnnonce={annonces._id}/>
    <br/><br/>
    </center>
    </div>

       )
      }


})}



    </div>)
 
  
}
