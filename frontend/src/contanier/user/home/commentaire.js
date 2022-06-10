import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import useFetch from "use-http";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { useLocalStorage } from "react-use-storage";

import TextField from "@mui/material/TextField";
export default function InsetDividers({idAnnonce}) {
     const { get, post, response, loading, error } = useFetch(
    "http://localhost:7000"
  );

  const [messageInValidText, setMessageInValidText] = useState("");
  const [id, setid, removeid] = useLocalStorage("id", "");
    const [commentaire, setCommentaires] = useState([]);
    const [login, setLogin] = useState([]);
     const [text, setText] = useState("");
    
  useEffect(async () => {
    
    const commentaires = await get('/api/commentaire')
    console.log(commentaires)
   
    setCommentaires(commentaires)
   
  }, [])

  
  return (
      <div>
        
    <List
      sx={{
        width: '100%',
        maxWidth: 800,
        bgcolor: 'background.paper',
      }}
    >
      
<h1>Liste de commentaire</h1>
        {commentaire.map(

(commentaires) => {  
    if(commentaires.annonce != null && commentaires.annonce._id === idAnnonce){
return (

    <div>
<ListItem>
        <ListItemAvatar>
          <Avatar>
          <h1 class="bi bi-person"/>
          </Avatar>
          <p> {commentaires.user.login}</p>
        </ListItemAvatar>
        <ListItemText style={{color:'black'}}primary={commentaires.text} secondary={commentaires.dateCreation}  />
      </ListItem>

    </div>
)
}
      
    })}

<br/>

<TextField
            margin="normal"
            required
            fullWidth
            id="Text"
            label="Text"
            name="Text"
            autoComplete="Text"
            autoFocus
            onChange={(e) => {
              setText(e.target.value);
              setMessageInValidText("")
            }}
          />

<font color="red">  {messageInValidText}</font>
<Button
            fullWidth
            onClick={async (variant) => {
              if (text.trim().length === 0) {
               setMessageInValidText("votre champ est vide.");
                //setIsVisible(true);
              } else {
            
                const res = await post("/api/commentaire/create", {
                text,
               user: id,
               annonce: idAnnonce
                });
                if (res.reponse) {
                 // setOpen(false);
                  window.location.reload();
                } else {
                  //setMessageInValid(res.msg);
                  //setIsVisible(true);
                }
              }
            }}
          >
            Envoyer
          </Button>
    </List>


<br/>

          </div>
  );
}
