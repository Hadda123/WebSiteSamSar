import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import { useFetch } from "use-http";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useLocalStorage } from "react-use-storage";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { InputGroup } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Alert from "../../../verification/alert";
import Loading from "../../../components/Loading";

export default function MediaCard() {
  const fetchData = async () => {
    let data = await get("/api/annonce");
    return data;
  };
  const [isconnect, setisconnect, removeisconnect] = useLocalStorage(
    "isconnect",
    false
  );
  const [openAjout, setOpenAjout] = useState(false);

  const [disable, setDisable] = useState(false);

  const [idAnnonce, setIdAnnonce] = useState();
  const [titre, setTitre] = useState();
  const [descrption, setDescrption] = useState();

  const [description, setDescription] = useState();
  const [transaction, setTransaction] = useState();
  const [metrage, setMetrage] = useState();
  const [prix, setPrix] = useState();
  const [surfacehabitable, setSurfacehabitable] = useState();
  const [surfaceterrain, setSurfaceterrain] = useState();
  const [dateconstruction, setDateconstruction] = useState();
  const [sallebain, setSallebain] = useState();
  const [chambre, setChambre] = useState();
  const [piece, setPiece] = useState();
  const [nbreEtage, setNbreEtage] = useState();

  /*Begin Dialoge Update */
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleCloseOpenUpdate = () => {
    setOpenUpdate(false);
  };

  const handleCloseOpenAjout = () => {
    setOpenAjout(false);
  };

  const { get } = useFetch("http://localhost:7000");

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reclamation, setReclamation] = useState([]);
  const [annonce, setAnnonces] = useState([]);
  const [messageInValid, setMessageInValid] = useState("");
  const [currAnnonces, setCurrAnnonces] = useState([]);
  const [id, setid, removeid] = useLocalStorage("id", "");
  useEffect(() => {
    axios
      .get("/api/reclamation")

      .then((res) => {
        console.log(res);
        setReclamation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(async () => {
    
    const annonce = await get('/api/annonce')
    console.log(annonce)
    console.log(annonce.length)
    setAnnonces(annonce)
    setIsLoading(false);
  }, [])
/*
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/annonce")

      .then((res) => {
        console.log(res);
        setAnnonces(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

*/
  
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isLoading ? (
    <Loading />
  ) :   (
    <div>
      <div className="m-3 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-3 place-items-center justify-items-center">
        
        {annonce.map((annonces) => {
         if(annonces.user != null && annonces.user._id === id){
          return (
            <div className="rounded flex flex-col gap-3 items-center justify-center glass text-white w-full h-full">
              <img
                className="h-[225px] w-[calc(100%-2px)] mx-auto rounded"
                src={annonces.SearchImg?.split(",")[0]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://pediaa.com/wp-content/uploads/2020/08/Difference-Between-Property-and-Real-Estate_1-1024x660.jpg";
                }}
              />
              <Card.Body>
              <Card.Title className="flex justify-center items-center">
                  {annonces.transaction}
                </Card.Title>
                <Card.Title className="flex justify-center items-center">
                  {annonces.titre}
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="mx-auto flex gap-2 justify-center items-center">
                  <button
                    className="btn"
                    onClick={() => {
                      {
                        isconnect
                          ? setOpenAjout(true)
                          : (window.location = "/login");
                      }
                    }}
                  >
                    Réclamation
                  </button>
                  <a
                    href={`${
                      isconnect ? `/information/${annonces._id}` : "/login"
                    } `}
                    className="btn"
                    onClick={() => {
                      {
                        isconnect
                          ? (window.location = "/information")
                          : (window.location = "/login");
                      }
                    }}
                  >
                    Plus D'Information
                  </a>
                </div>
                <hr className="my-2" />

                {isconnect && annonces?.user?._id === id ? (
                  <div className="flex gap-2 mx-auto justify-center items-center ">
                    <button
                      className="btn"
                      onClick={() => {
                        setIdAnnonce(annonces._id);
                        setTitre(annonces.titre);
                        setTransaction(annonces.transaction);

                        setDescription(annonces.description);
                        setMetrage(annonces.metrage);
                        setPrix(annonces.prix);
                        setSurfacehabitable(annonces.surfacehabitable);
                        setSurfaceterrain(annonces.surfaceterrain);
                        setDateconstruction(annonces.dateconstruction);
                        setSallebain(annonces.sallebain);
                        setChambre(annonces.chambre);
                        setPiece(annonces.piece);
                        setNbreEtage(annonces.nbreEtage);

                        setOpenUpdate(true);
                      }}
                    >
                      <ModeEditIcon />
                    </button>

                    <button
                      className="btn"
                      variant="contained"
                      onClick={() => {
                        setIdAnnonce(annonces._id);
                        setOpen(true);
                      }}
                    >
                      <DeleteIcon />
                    </button>

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Suppression
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Vous-êtes sûr de supprimer cette Annonce.. ?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <button
                          className="btn"
                          onClick={async (variant) => {
                            setIsLoading(true);
                            axios
                              .delete(
                                `http://localhost:7000/api/annonce/delete/${idAnnonce}`
                              )
                              .then(
                                (res) => console.log(res),
                                setOpen(false),
                                (window.location = "/")
                              )
                              .catch((err) => console.log(err));
                            fetchData("apiCall").then((data) => {
                              setAnnonces(data);
                              setCurrAnnonces(data);
                              localStorage.setItem(
                                "annonces",
                                JSON.stringify(data)
                              );
                              setIsLoading(false);
                            });
                          }}
                        >
                          Oui
                        </button>
                        <button onClick={handleClose} autoFocus>
                          Non
                        </button>
                      </DialogActions>
                    </Dialog>

                    <Dialog
                      open={openUpdate}
                      onClose={handleCloseOpenUpdate}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Modification
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="titre"
                            label="titre"
                            value={titre}
                            name="Titre"
                            autoComplete="titre"
                            onChange={(e) => {
                              setTitre(e.target.value);
                            }}
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Description"
                            label="description"
                            value={description}
                            name="Description"
                            autoComplete="Description"
                            autoFocus
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                          />

                          <table>
                            <tr>
                              <td>
                                <TextField
                                  margin="normal"
                                  required
                                  style={{ width: "400px" }}
                                  id="Prix"
                                  label={prix}
                                  name="Prix"
                                  autoComplete="Prix"
                                  autoFocus
                                  onChange={(e) => {
                                    setPrix(e.target.value);
                                  }}
                                />
                              </td>
                              <td>
                                <InputGroup.Text style={{ height: "50px" }}>
                                  DT
                                </InputGroup.Text>
                              </td>
                            </tr>
                          </table>

                          <table>
                            <tr>
                              <td>
                                <TextField
                                  margin="normal"
                                  style={{ width: "400px" }}
                                  id="surfaceterrain"
                                  label={surfaceterrain}
                                  name="surfaceterraine"
                                  autoComplete="surfaceterrain"
                                  autoFocus
                                  onChange={(e) => {
                                    setSurfaceterrain(e.target.value);
                                  }}
                                />
                              </td>
                              <td>
                                <InputGroup.Text style={{ height: "50px" }}>
                                  m²
                                </InputGroup.Text>
                              </td>
                            </tr>
                          </table>

                          <table>
                            <tr>
                              <td>
                                <TextField
                                  margin="normal"
                                  style={{ width: "400px" }}
                                  id="surfacehabitable"
                                  label={surfacehabitable}
                                  name="surfacehabitable"
                                  autoComplete="surfacehabitable"
                                  autoFocus
                                  onChange={(e) => {
                                    setSurfacehabitable(e.target.value);
                                  }}
                                />
                              </td>
                              <td>
                                <InputGroup.Text style={{ height: "50px" }}>
                                  m²
                                </InputGroup.Text>
                              </td>
                            </tr>
                          </table>

                          <table>
                            <tr>
                              <td>
                                <TextField
                                  margin="normal"
                                  required
                                  style={{ width: "400px" }}
                                  id="Metrage"
                                  label={metrage}
                                  name="Metrage"
                                  autoComplete="Metrage"
                                  autoFocus
                                  onChange={(e) => {
                                    setMetrage(e.target.value);
                                  }}
                                />
                              </td>
                              <td>
                                <InputGroup.Text style={{ height: "50px" }}>
                                  m²
                                </InputGroup.Text>
                              </td>
                            </tr>
                          </table>

                          <input
                            margin="normal"
                            fullWidth
                            id="dateConstruction"
                            type="date"
                            label={dateconstruction}
                            name="dateConstruction"
                            autoComplete="dateConstruction"
                            autoFocus
                            onChange={(e) => {
                              setSallebain(e.target.value);
                            }}
                          />

                          <TextField
                            margin="normal"
                            fullWidth
                            id="sallebain"
                            label={sallebain}
                            name="sallebain"
                            autoComplete="sallebain"
                            autoFocus
                            onChange={(e) => {
                              setSallebain(e.target.value);
                            }}
                          />

                          <TextField
                            margin="normal"
                            fullWidth
                            id="chambre"
                            label={chambre}
                            name="chambre"
                            autoComplete="chambre"
                            autoFocus
                            onChange={(e) => {
                              setChambre(e.target.value);
                            }}
                          />

                          <TextField
                            margin="normal"
                            fullWidth
                            id="piece"
                            label={piece}
                            name="piece"
                            autoComplete="piece"
                            autoFocus
                            onChange={(e) => {
                              setPiece(e.target.value);
                            }}
                          />

                          <TextField
                            margin="normal"
                            fullWidth
                            id="nbreEtage"
                            label={nbreEtage}
                            value={nbreEtage}
                            name="nbreEtage"
                            autoComplete="nbreEtage"
                            autoFocus
                            onChange={(e) => {
                              setNbreEtage(e.target.value);
                            }}
                          />
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={async (variant) => {
                            axios
                              .put(
                                `http://localhost:7000/api/annonce/update/${idAnnonce}`,
                                {
                                  transaction: transaction,
                                  titre: titre,
                                  description: description,
                                  metrage: metrage,
                                  prix: prix,
                                  surfacehabitable: surfacehabitable,
                                  surfaceterrain: surfaceterrain,
                                  dateconstruction: dateconstruction,
                                  sallebain: sallebain,
                                  chambre: chambre,
                                  piece: piece,
                                  nbreEtage: nbreEtage,
                                }
                              )
                              .then(
                                (res) => console.log(res),
                                setOpenUpdate(false),
                                (window.location = "/")
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
                  </div>
                ) : null}
              </Card.Body>
            </div>
          );
        }
        })}
      </div>
      <Dialog
        open={openAjout}
        onClose={handleCloseOpenAjout}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Ajout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vous pouvez passer une reclamation !
          </DialogContentText>

          <TextField
            margin="normal"
            required
            fullWidth
            id="Titre"
            label="Titre"
            name="Titre"
            autoComplete="Titre"
            autoFocus
            onChange={(e) => {
              setTitre(e.target.value);
            }}
          />

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Détail</label>
            <textarea
              class="form-control"
              id="Descrption"
              name="Descrption"
              autoComplete="Descrption"
              autoFocus
              onChange={(e) => {
                setDescrption(e.target.value);
              }}
              rows="3"
            ></textarea>
          </div>
        </DialogContent>

        {isVisible ? <Alert messageInValid={messageInValid} /> : null}

        <DialogActions>
          <Button
            disabled={disable}
            fullWidth
            onClick={async (variant) => {
              if (titre.trim().length === 0) {
                setMessageInValid("votre champ est vide.");

                setIsVisible(true);
              } else {
                axios
                  .post("http://localhost:7000/api/reclamation/create", {
                    titre,
                    descrption,
                  })

                  .then(
                    (res) => console.log(res),
                    setOpen(false),
                    (window.location = "/")
                  );
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
    </div>
  );
}
