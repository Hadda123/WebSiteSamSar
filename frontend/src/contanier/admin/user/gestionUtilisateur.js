import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import {useState, useEffect}  from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '../../../verification/alert'
import ButtonMenu from '../categorie/ButtonMenu'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {useLocalStorage} from "react-use-storage";
import MailOutline from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom'
import { height } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240;




export default function PermanentDrawerLeft() {

/*Begin Dialoge Supp */
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
/*End Dialoge Supp */




/*Begin Dialoge Ajout */
const [openAjout, setOpenAjout] = React.useState(false);

const handleClickOpenAjout = () => {
  setOpen(true);
};

const handleCloseOpenAjout = () => {
  setOpenAjout(false);
};

/*End Dialoge Ajout */




/*Begin Dialoge Update */
const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseOpenUpdate = () => {
    setOpenUpdate(false);
  };
  
/*End Dialoge Update */


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [isVisible,setIsVisible]=React.useState(false)
  const [utilisateur, setUtilisateur]  = useState([])
  const [motCle, setMotCle]  = useState("")
  const [iduser, setIdUser]  = useState("")

  const [nom,setNom]= useState("")
  
  const [reclamation,setReclamation]= useState("")
  const [disable,setDisable]=React.useState(false)
  
  const [messageInValid,setMessageInValid]=React.useState("")
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/reclamation")
  
      .then((res) => {
        console.log(res);
        setReclamation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(()=>{
     axios
   .get ('http://localhost:7000/api/user')
      
.then ((res) =>{ console.log(res)
  setUtilisateur(res.data)
  })
.catch (err  => {
   console.log(err)
   
})
},)
  return (
    
      
     
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        style={{ height: "80px", backgroundColor: "#247881" }}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Box ml={120}>
            {" "}
            <MailOutline />{" "}
          </Box>
          &nbsp; &nbsp;
          <Box>
      
            <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={()=>{
            window.location="/gestionR??clamation"
          }}
        >
          <Badge badgeContent={reclamation.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
     
      </MenuItem>

          </Box>
          &nbsp; &nbsp;
          <Box>
            {" "}
            <SettingsIcon />{" "}
          </Box>
      





        &nbsp;   &nbsp;
        <Box> <AccountCircleIcon/></Box> 
        

      </Toolbar>
    </AppBar>  
  
    <div style={{backgroundColor :'#646FD4'}} >
    <Box  mt={10} style={{backgroundColor :'#646FD4'}}>

    <Drawer  style={{backgroundColor :'#646FD4'}}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      
        <Box style={{backgroundColor :'#646FD4'}}>
        <br/><br/>

         <Box ml={12} style={{backgroundColor :'#646FD4'}}> <AccountCircleIcon/></Box> 
         <Box ml={10} style={{backgroundColor :'#646FD4', color:'white'}}> Admin </Box>
         </Box>
      <Toolbar  mt={50}style={{backgroundColor :'#646FD4'}}/>
      <Divider />
      <List style={{backgroundColor :'#646FD4'}} >
      <table>
      <tr>
      <td> <h3 className="bi bi-house-fill" style={{color:'white'}}/> </td>
        <td><ListItem    button onClick={()=>{window.location="/gestionCategorie"}} style={{backgroundColor :'#646FD4', color:'white'}}> Home &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</ListItem>
       </td>

       <td><h3 className="bi bi-chevron-right"style={{color:'white'}} onClick={()=>{window.location="/gestionCategorie"}} /></td>
       </tr>
    
    
    
      <tr>
      <td> <h3 className="bi bi-card-checklist" style={{color:'white'}}/></td>
      <td>
        <ListItem button onClick={()=>{window.location="/gestionCategorie"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Cat??gorie</ListItem>
   
      </td>
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}}onClick={()=>{window.location="/gestionCategorie"}} /></td>
      </tr>
      
      <tr>
      <td> <h3 className="bi bi-file-text" style={{color:'white'}}/></td><td>
      <ListItem button onClick={()=>{window.location="/gestionAnnonce"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Annonce</ListItem>
      </td>
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}}onClick={()=>{window.location="/gestionAnnonce"}} /></td>
      </tr>
      <tr>
      
      <td> <h3 className="bi bi-file-person" style={{color:'white'}}/></td>
      <td>  <ListItem button onClick={()=>{window.location="/gestionUtilisateur"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Utilisateur</ListItem>
      </td> 
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}} onClick={()=>{window.location="/gestionUtilisateur"}} /></td>
      </tr> 
      </table>
      </List>
      <Divider />
     
      <List style={{backgroundColor :'#646FD4'}} >
      <table>
      <tr>
     
        
      
      <td> <h3 className="bi bi-pencil-square" style={{color:'white'}}/></td>
      <td><ListItem button onClick={()=>{window.location="/gestionGouvernorat"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Gouvernorat</ListItem>
      </td>
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}} onClick={()=>{window.location="/gestionGouvernorat"}}/></td>
      </tr> 
      <tr> 
      <td> <h3 className="bi bi-pencil" style={{color:'white'}}/></td>
      <td><ListItem button onClick={()=>{window.location="/gestionDelegation"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion D??l??gation</ListItem>
      </td>
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}}  onClick={()=>{window.location="/gestionDelegation"}}/></td>
      </tr> 
      <tr> 
      <td> <h3 className="bi bi-flag-fill" style={{color:'white'}}/></td>
      <td><ListItem button onClick={()=>{window.location="/gestionR??clamation"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion R??clamation</ListItem>
      
      </td> 
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}} onClick={()=>{window.location="/gestionR??clamation"}} /></td>
      </tr> 
      <tr>
      <td> <h3 className="bi bi-lock-fill"style={{color:'white'}}/> </td>
      <td><ListItem button style={{backgroundColor :'#646FD4', color:'white'}}> Se d??connecter</ListItem>
      
      </td> 
      </tr> 
      </table>
       </List>
      


       <List style={{backgroundColor :'#646FD4'}} >
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       </List>
    



      <Toolbar style={{backgroundColor :'#646FD4'}}/>
      <Divider  style={{backgroundColor :'#646FD4'}}/>
    </Drawer>
    </Box>
    </div>
    <Box
      component="main" 
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar  />
      <Typography paragraph >
      <div>
     <>
     <br/>
<h3 style={{ color:"#43919B"}}>  gestion Utilisateurs</h3>
</><div style={{textAlign:"center"}}>
<Box  mt={-7}  >

    
  
  
            

    
  <TextField  id="input-with-sx" margin="normal" style= {{textAlign:"center"}} label="chercher par mot cl?? "
  onChange={(e)=>{
    setMotCle(e.target.value)
  }}
 />
 <Box mt ={-6} ml={18}>
  <i className="bi bi-search"/>
  </Box>
</Box>

 <Box  mt={-3} ml={120} >

</Box>


</div>

<br/><br/>

<br/> 
      <div>  
         <table  className="table table-bordered" >  
         <thead > 
                <tr className="table-primary">  
                           <th scope="col"> User</th> 
                           <th scope="col"> Sexe</th> 
                           <th scope="col"> Date de naissance</th> 
                           <th scope="col" style={{textAlign:"center"}}> Action</th>
                          
                   </tr>
                   </thead >    
               
                   <tbody>      
              {utilisateur.map(

              (utilisateurs) => {

                if (motCle == "") {
                  return (

                   
                      <tr>
                      <td>{utilisateurs.login}</td>
                      <td>{utilisateurs.sexe}</td>
                      <td>{utilisateurs.login}</td>
                      <td >
                      <center>
                      
                        &nbsp;&nbsp;

                        <Button  style={{backgroundColor:"#56BBF1"}} variant="contained" onClick={
                          ()=>{
                            setIdUser(utilisateurs._id);
                            setOpen(true);
                            
                          }
                        }>
                        <DeleteIcon /> 
                        </Button>
                        </center>
        </td>
                      </tr>


                  )
                }else if(utilisateurs.login.toUpperCase().includes(motCle.toUpperCase())){
                  return (

                   
                    <tr>
                    <td>{utilisateurs.login}</td>
                    <td>{utilisateurs.sexe}</td>
                    <td>{utilisateurs.login}</td>
                    <td >
                    <center>
                    
                      &nbsp;&nbsp;

                      <Button  style={{backgroundColor:"#56BBF1"}} variant="contained" onClick={
                        ()=>{
                          setIdUser(utilisateurs._id);
                          setOpen(true);
                          
                        }
                      }>
                      <DeleteIcon /> 
                      </Button>
                      </center>
      </td>
                    </tr>


                )
                }



              })}
              
                  
                  
              </tbody>                    

               
                   
                   </table>
    </div>
  




    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          Suppression
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
           Vous-??tes s??r de supprimer cette utilisateur.. ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={async (variant) => {


                
axios.delete(`http://localhost:7000/api/user/delete/${iduser}`)
.then(
    res => console.log(res),
    setOpen(false),
    window.location="/gestionUtilisateur"

)
.catch(err => console.log(err));

}}
          
          
          
          >Oui</Button>
          <Button onClick={handleClose} autoFocus>
            Non
          </Button>
        </DialogActions>
      </Dialog>



    </div>
 
        </Typography>
        
      </Box>


    </Box>
 
  );
}


