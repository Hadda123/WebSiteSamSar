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
import useFetch from 'use-http';
const drawerWidth = 240;




<>
<br/> <br/> <br/> <br/> <br/>
<br/> <br/> <br/> <br/> <br/>

<br/> <br/> <br/> <br/> <br/>
<br/> <br/> <br/> <br/> <br/>
</>
export default function PermanentDrawerLeft() {

  const { get, post, response, loading, error } = useFetch('http://localhost:7000')

/*Begin Dialoge Supp */
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
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


  <>
  <br/> <br/> <br/> <br/> <br/>
  <br/> <br/> <br/> <br/> <br/>
  
  <br/> <br/> <br/> <br/> <br/>
  <br/> <br/> <br/> <br/> <br/>
  </>
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
  const [reclamation, setReclamation]  = useState([])
  const [motCle, setMotCle]  = useState("")
  const [idReclamation, setIdReclamation]  = useState("")

  const [titre,setTitre]= useState("")
  const [disable,setDisable]=React.useState(false)
  

  const [messageInValid,setMessageInValid]=React.useState("")
  useEffect(()=>{
     axios
   .get ('http://localhost:7000/api/reclamation')
      
.then ((res) =>{ console.log(res)
   setReclamation(res.data)
  })
.catch (err  => {
   console.log(err)
   
})
})
  return (
    
      
    <Box sx={{ display: 'flex'}}  >
     
      <CssBaseline />
    
      <AppBar style={{height:"80px", backgroundColor:"#247881"}}
        position="fixed" 
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar >
        <Box ml ={120} >  <MailOutline />   </Box>
        &nbsp;   &nbsp;

        <Box >   <NotificationsNoneIcon/> </Box>
        &nbsp;   &nbsp;
        <Box >   <SettingsIcon/> </Box>
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
        <ListItem button onClick={()=>{window.location="/gestionCategorie"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Catégorie</ListItem>
   
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
      <td><ListItem button onClick={()=>{window.location="/gestionDelegation"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Délégation</ListItem>
      </td>
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}}  onClick={()=>{window.location="/gestionDelegation"}}/></td>
      </tr> 
      <tr> 
      <td> <h3 className="bi bi-flag-fill" style={{color:'white'}}/></td>
      <td><ListItem button onClick={()=>{window.location="/gestionRéclamation"}} style={{backgroundColor :'#646FD4', color:'white'}}> Gestion Réclamation</ListItem>
      
      </td> 
      
      <td><h3 className="bi bi-chevron-right"style={{color:'white'}} onClick={()=>{window.location="/gestionRéclamation"}} /></td>
      </tr> 
      <tr>
      <td> <h3 className="bi bi-lock-fill"style={{color:'white'}}/> </td>
      <td><ListItem button style={{backgroundColor :'#646FD4', color:'white'}}> Se déconnecter</ListItem>
      
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
    <Box>
    








    


    </Box>
    </Box>
 
  );
}


