import * as React from 'react';
import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useLocalStorage} from "react-use-storage";
import Loader from '../../verification/loader';
import Alert from '../../verification/alert'
import Navbar from '../../components/navbar'
import { FormControl, Form } from 'react-bootstrap';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: '#ea4888',
    },
  },
});
export default function SignIn() {


  
  const [numeroTel,setNumeroTel,removeNumeroTel]=useLocalStorage("numeroTel","")
  const [login,setLogin]=React.useState("");
  const [nom,setNom]=React.useState("");
  const [prénom,setPrénom]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [sexe,setSexe]=React.useState("");
  const [dateNaissance,setDateNaissance]=React.useState("0");
  const [roleUser,setRoleUser]=React.useState("User");
  const [disable,setDisable]=React.useState(false)
  const [messageInValid,setMessageInValid]=React.useState("")
  const [isVisible,setIsVisible]=React.useState(false)
  const [isVisibleLoading,setIsVisibleLoading]=React.useState(false)
  
  const [messageInValidNom,setMessageInValidNom]=React.useState("")
  const [messageInValidPrénom,setMessageInValidPrénom]=React.useState("")
  const [messageInValidEmail,setMessageInValidEmail]=React.useState("")

  
  
  const [messageInValidPassword, setMessageInValidPassword] = useState("");
  const [messageInValidLogin, setMessageInValidLogin] = useState("");
  
  const [messageInValidNum, setMessageInValidNum] = useState("");
  const [messageInValidDateNaissance, setMessageInValidDateNaissance] = useState("");
  
  return (
    <ThemeProvider theme={theme}>
       <Navbar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
                  

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
         
          { isVisibleLoading? 

<Loader/>

:null
}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            

<TextField
              margin="normal"
              required
              fullWidth
              id="Login"
              label="Login"
              name="Login"
              autoComplete="Login"
              autoFocus
              onChange={(e)=>{
                setLogin(e.target.value)
                setMessageInValidLogin("")
              }}
             
            
            />

<font color="red">  {messageInValidLogin}</font>
<TextField
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="password"
              name="password"
              autoComplete="Password"
              autoFocus
              onChange={(e)=>{
                setPassword(e.target.value)
                setMessageInValidPassword("")
              }}
             
            
            />

<font color="red">  {messageInValidPassword}</font>


<TextField
              margin="normal"
              required
              fullWidth
              id="numTel"
              type="number"
              label="Numéro de telephone"
              name="numTel"
              autoComplete="numTel"
              autoFocus
              disabled
              value={numeroTel}
             
            
            />

            
<TextField
              margin="normal"           
              required
              fullWidth
              id="DateNaissance"
              type="date"
             // label="DateNaissance"
              name="DateNaissance"
            autoComplete="DateNaissance"
              max="2004-01-01"
              autoFocus
              
              onChange={(e)=>{
                //setDateNaissance(e.target.value)
                var today = new Date();
                var birthDate = new Date(e.target.value);
                var age = today.getFullYear() - birthDate.getFullYear();
                setMessageInValidDateNaissance("")
                if (age >= 18) 
                {
                  setDateNaissance(e.target.value)
                  setMessageInValidDateNaissance("")
                }else{
                  setDateNaissance("0")
                  setMessageInValidDateNaissance("L'age doit etre plus de 18 ans")

                }
                

              }}
             
            
            />

    
<font color="red">  {messageInValidDateNaissance}</font>
  



<br/>
<br/>



<Form.Select aria-label="Default select example"
            onChange={(e)=>{
              setSexe(e.target.value)
            }}
          
          >
    
    <option value={0} >--Please choose a sexe--</option>
    
    <option value="Femme">Femme</option>
    
    <option value="Homme">Homme</option>
    </Form.Select>
    <TextField
              margin="normal"
             
              fullWidth
              id="Nom"
              label="Nom"
              name="Nom"
              autoComplete="Nom"
              autoFocus
              onChange={(e)=>{
                setNom(e.target.value)
                setMessageInValidNom("")
              }}
             
            
            />

<font color="red">  {messageInValidNom}</font>
<TextField
              margin="normal"
             
              fullWidth
              id="Prénom"
              label="Prénom"
              name="Prénom"
              autoComplete="Prénom"
              autoFocus
              onChange={(e)=>{
                setNom(e.target.value)
                setMessageInValidPrénom("")
              }}
             
            
            />

<font color="red">  {messageInValidPrénom}</font>
<TextField
              margin="normal"
             
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              autoComplete="Email"
              autoFocus
              onChange={(e)=>{
                setNom(e.target.value)
                setMessageInValidEmail("")
              }}
             
            
            />

<font color="red">  {messageInValidEmail}</font>

<br/>









              <Button variant="contained"   disabled={disable}  fullWidth onClick={()=>{

setIsVisibleLoading(true)
setDisable(true);


if(login.trim().length === 0 ){

  setDisable(false);
  setIsVisibleLoading(false);

  setMessageInValidLogin("votre login est Vide.")


}else if(password.trim().length ===0){

  setDisable(false);
  setIsVisibleLoading(false);
  setMessageInValidPassword("votre password est Vide.")


}


else if(dateNaissance ==="0"){

  setDisable(false);
  setIsVisibleLoading(false);
  setMessageInValidDateNaissance("L'age doit etre plus de 18 ans")


         }         else{
                                 
                axios.post('http://localhost:7000/api/user/create', {
                  login,
                  password,
                    numTel:numeroTel,
                    sexe,
                    dateNaissance,
                    roleUser
                    })
                    .then((res) => {
                    console.log(res);
                    //this.props.history.push('/verification');
                    window.location="/login"
                    setNumeroTel("")
                   
                    setDisable(false);
                    })
                    .catch((error) => {
                     
                    console.log(error);
                    
                    setDisable(false);
                    setMessageInValid("votre données invalide.")
                    setIsVisible(true)
                    setIsVisibleLoading(false);
                    });

                  }}}>Connexion</Button>
        
          </Box>
        </Box>
        { isVisible? 
                <Alert messageInValid={messageInValid}/>
              :null
              }

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

