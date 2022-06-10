import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import RadioGroup from "@mui/material/RadioGroup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';


import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "../../../verification/alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutline from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import useFetch from "use-http";
const drawerWidth = 240;

<>
  <br /> <br /> <br /> <br /> <br />
  <br /> <br /> <br /> <br /> <br />
  <br /> <br /> <br /> <br /> <br />
  <br /> <br /> <br /> <br /> <br />
</>;
export default function PermanentDrawerLeft() {
  const { get, post, response, loading, error } = useFetch(
    "http://localhost:7000"
  );

  /*Begin Dialoge Supp */
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const propContainer = useRef();
  /*End Dialoge Supp */

  /*Begin Dialoge Ajout */
  const [openAjout, setOpenAjout] = useState(false);

  const handleCloseOpenAjout = () => {
    setOpenAjout(false);
  };

  /*End Dialoge Ajout */

  /*Begin Dialoge Update */
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleCloseOpenUpdate = () => {
    setOpenUpdate(false);
  };

  /*End Dialoge Update */

  <>
    <br /> <br /> <br /> <br /> <br />
    <br /> <br /> <br /> <br /> <br />
    <br /> <br /> <br /> <br /> <br />
    <br /> <br /> <br /> <br /> <br />
  </>;

  const [isVisible, setIsVisible] = useState(false);
  const [categorie, setCategorie] = useState([]);
  const [reclamation, setReclamation] = useState([]);
  const [motCle, setMotCle] = useState("");
  const [idCategorie, setIdCategorie] = useState("");
  const [champObligatoire, setchampObligatoire] = useState("Non");
  const[dateCreation, setDateCreation]=useState("");
  const [nom, setNom] = useState("");

  const [messageInValid, setMessageInValid] = useState("");
 
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

 
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/categorie")

      .then((res) => {
        console.log(res);
        setCategorie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            window.location="/gestionRéclamation"
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
          &nbsp; &nbsp;
          <Box>
            {" "}
            <AccountCircleIcon />
          </Box>
        </Toolbar>
      </AppBar>

      <div style={{ backgroundColor: "#646FD4" }}>
        <Box mt={10} style={{ backgroundColor: "#646FD4" }}>
          <Drawer
            style={{ backgroundColor: "#646FD4" }}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Box style={{ backgroundColor: "#646FD4" }}>
              <br />
              <br />

              <Box ml={12} style={{ backgroundColor: "#646FD4" }}>
                {" "}
                <AccountCircleIcon />
              </Box>
              <Box
                ml={10}
                style={{ backgroundColor: "#646FD4", color: "white" }}
              >
                {" "}
                Admin{" "}
              </Box>
            </Box>
            <Toolbar mt={50} style={{ backgroundColor: "#646FD4" }} />
            <Divider />
            <List style={{ backgroundColor: "#646FD4" }}>
              <table>
                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-house-fill"
                      style={{ color: "white" }}
                    />{" "}
                  </td>
                  <td>
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionCategorie";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Home &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionCategorie";
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-card-checklist"
                      style={{ color: "white" }}
                    />
                  </td>
                  <td>
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionCategorie";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Gestion Catégorie
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionCategorie";
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-file-text"
                      style={{ color: "white" }}
                    />
                  </td>
                  <td>
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionAnnonce";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Gestion Annonce
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionAnnonce";
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-file-person"
                      style={{ color: "white" }}
                    />
                  </td>
                  <td>
                    {" "}
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionUtilisateur";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Gestion Utilisateur
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionUtilisateur";
                      }}
                    />
                  </td>
                </tr>
              </table>
            </List>
            <Divider />

            <List style={{ backgroundColor: "#646FD4" }}>
              <table>
                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-pencil-square"
                      style={{ color: "white" }}
                    />
                  </td>
                  <td>
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionGouvernorat";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Gestion Gouvernorat
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionGouvernorat";
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <h3 className="bi bi-pencil" style={{ color: "white" }} />
                  </td>
                  <td>
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionDelegation";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Gestion Délégation
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionDelegation";
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-flag-fill"
                      style={{ color: "white" }}
                    />
                  </td>
                  <td>
                    <ListItem
                      button
                      onClick={() => {
                        window.location = "/gestionRéclamation";
                      }}
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Gestion Réclamation
                    </ListItem>
                  </td>

                  <td>
                    <h3
                      className="bi bi-chevron-right"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location = "/gestionRéclamation";
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <h3
                      className="bi bi-lock-fill"
                      style={{ color: "white" }}
                    />{" "}
                  </td>
                  <td>
                    <ListItem
                      button
                      style={{ backgroundColor: "#646FD4", color: "white" }}
                    >
                      {" "}
                      Se déconnecter
                    </ListItem>
                  </td>
                </tr>
              </table>
            </List>

            <List style={{ backgroundColor: "#646FD4" }}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </List>

            <Toolbar style={{ backgroundColor: "#646FD4" }} />
            <Divider style={{ backgroundColor: "#646FD4" }} />
          </Drawer>
        </Box>
      </div>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          <div>
            <>
              <br />
              <h3 style={{ color: "#43919B" }}> gestion catégorie</h3>
            </>
            <div style={{ textAlign: "center" }}>
              <Box mt={-7}>
                <TextField
                  id="input-with-sx"
                  margin="normal"
                  style={{ textAlign: "center" }}
                  label="chercher par mot clé "
                  onChange={(e) => {
                    setMotCle(e.target.value);
                  }}
                />
                <Box mt={-6} ml={18}>
                  <i className="bi bi-search" />
                </Box>
              </Box>

              <Box mt={-3} ml={120}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "0E49B5" }}
                  onClick={() => {
                    setOpenAjout(true);
                  }}
                >
                  {" "}
                  <AddIcon />
                  Ajouter
                </Button>
              </Box>
            </div>

            <br />

            <div>
           
              <table className="table table-bordered">
                <thead>
                  <tr className="table-primary">
                    <th scope="col"> Nom catégorie</th>
                    <th scope="col">Date de création</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      {" "}
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {categorie.map((categories) => {
                    if (motCle == "") {
                      return (
                        <tr>
                          <td>{categories.nom}</td>
                          
                          <td>{categories.dateCreation}</td>
                          <td>
                            <center>
                              <Button
                                style={{ backgroundColor: "#43919B" }}
                                variant="contained"
                                onClick={() => {
                                  setIdCategorie(categories._id);
                                  setNom(categories.nom);
                                  setOpenUpdate(true);
                                }}
                              >
                                <ModeEditIcon />
                                Modifier
                              </Button>
                              &nbsp;&nbsp;
                              <Button
                                style={{ backgroundColor: "#56BBF1" }}
                                variant="contained"
                                onClick={() => {
                                  setIdCategorie(categories._id);
                                  setOpen(true);
                                }}
                              >
                                <DeleteIcon /> Supprimer
                              </Button>
                            </center>
                          </td>
                        </tr>
                      );
                    } else if (
                      categories.nom
                        .toUpperCase()
                        .includes(motCle.toUpperCase())
                    ) {
                      return (
                        <tr>
                          <td>{categories.nom}</td>
                          <td>{categories.dateCreation}</td> 
                          <td>
                            <center>
                              <Button
                                style={{ backgroundColor: "#43919B" }}
                                variant="contained"
                                onClick={() => {
                                  setIdCategorie(categories._id);
                                  setNom(categories.nom);
                                  setOpenUpdate(true);
                                }}
                              >
                                <ModeEditIcon />
                              </Button>
                              &nbsp;&nbsp;
                              <Button
                                style={{ backgroundColor: "#56BBF1" }}
                                variant="contained"
                                onClick={() => {
                                  setIdCategorie(categories._id);
                                  setOpen(true);
                                }}
                              >
                                <DeleteIcon />
                              </Button>
                            </center>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Suppression</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vous-êtes sûr de supprimer cette Catégorie.. ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async (variant) => {
              axios
                .delete(
                  `http://localhost:7000/api/categorie/delete/${idCategorie}`
                )
                .then(
                  (res) => console.log(res),
                  setOpen(false),
                  (window.location = "/gestionCategorie")
                )
                .catch((err) => console.log(err));
            }}
          >
            Oui
          </Button>
          <Button onClick={handleClose} autoFocus>
            Non
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openUpdate}
        onClose={handleCloseOpenUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Modification</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              margin="normal"
              required
              fullWidth
              id="nom"
              label={nom}
              name="nom"
              autoComplete="nom"
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
            {/* //lahne */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async (variant) => {
              const props = [
                ...propContainer.current.getElementsByTagName("input"),
              ]
                .filter((item) => item.checked)
                .map((item) => item.value);
              axios
                .put(
                  `http://localhost:7000/api/categorie/update/${idCategorie}`,
                  {
                    nom: nom,
                    props,
                  }
                )
                .then(
                  (res) => console.log(res),
                  setOpenUpdate(false),
                  (window.location = "/gestionCategorie")
                )
                .catch((err) => console.log(err));
            }}
          >
            Oui
          </Button>
          <Button onClick={handleCloseOpenUpdate} autoFocus>
            Non
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openAjout}
        onClose={handleCloseOpenAjout}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Ajout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            vous pouvez maintenant ajouter une catégorie
          </DialogContentText>

          <TextField
            margin="normal"
            required
            fullWidth
            id="Nom"
            label="Nom"
            name="Nom"
            autoComplete="Nom"
            autoFocus
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
          <br/>
         
          <br/>
            Selon la catégorie vaut-il ajouter : Surface habitable,  le nombre de chambre et le nombre de salle bain.
          
            <br/>
          
            <RadioGroup name="use-radio-group" defaultValue="first">
              <div className="flex gap-4 mb-3 items-center justify-center">
                <input
                  className="w-5 h-5"
                  id="oui"
                  type="radio"
                  value="Oui"
                  name="champObligatoire"
                  label="first"
                  onClick={(e) => {
                    setchampObligatoire(e.target.value);
                  }}
                />
                <label htmlFor="vendre">Oui</label>
                <input
                  className="w-5 h-5"
                  id="non"
                  type="radio"
                  value="Non"
                  name="champObligatoire"
                  label="Second"
                  onClick={(e) => {
                    setchampObligatoire(e.target.value);
                  }}
                />
                <label htmlFor="louer">Non</label>
              </div>
            </RadioGroup>

          {isVisible ? <Alert messageInValid={messageInValid} /> : null}
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            onClick={async (variant) => {
              if (nom.trim().length === 0) {
                setMessageInValid("votre champ est vide.");
                setIsVisible(true);
              } else {
            
                const res = await post("/api/categorie/create", {
                  nom,
                 champObligatoire,
                });
                if (res.reponse) {
                  setOpen(false);
                  window.location = "/gestionCategorie";
                } else {
                  setMessageInValid(res.msg);
                  setIsVisible(true);
                }
              }
            }}
          >
            Enregistrer
          </Button>
          <Button onClick={handleCloseOpenAjout} autoFocus>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
     
    </Box>
  );
}
