import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useLocalStorage } from "react-use-storage";
import Loader from "../../../verification/loader";
import Alert from "../../../verification/alert";
import Navbar from "../../../components/navbar";
import { Form, FormControl, InputGroup } from "react-bootstrap";

import RadioGroup from "@mui/material/RadioGroup";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ea4888",
    },
  },
});

export default function SignIn() {
  const [transaction, setTransaction] = useState("A vendre");
  
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [metrage, setMetrage] = useState("");
  const [surfacehabitable, setSurfacehabitable] = useState("");
  const [surfaceterrain, setSurfaceterrain] = useState("");
  const [dateconstruction, setDateconstruction] = useState("0");
  const [sallebain, setSallebain] = useState("");
  const [chambre, setChambre] = useState("");
  const [piece, setPiece] = useState("");
  const [searchImg, setSearchImg] = useState("");
  const [gouvernorat, setGouvernorat] = useState([]);
  const [idGouvernorat, setIdGouvernorat] = useState("0");

  const [delegation, setDelegation] = useState([]);
  const [idDelegation, setIdDelegation] = useState("0");

  const [categorie, setCategorie] = useState([]);
  const [idCategorie, setIdCategorie] = useState("0");
  //  const [currEnabled, setCurrEnabled] = useState([]);

  const [nbreEtage, setNbreEtage] = useState("0");

  const [user, setUser] = useState("");
  const [id, setid, removeid] = useLocalStorage("id", "");


  const [disable, setDisable] = useState(false);
  
  
  const [messageInValidCategorie, setMessageInValidCategorie] = useState("");

  const [messageInValidGouvernorat, setMessageInValidGouvernorat] = useState("");
  
  const [messageInValidDelegation, setMessageInValidDelegation] = useState("");
  const [messageInValid, setMessageInValid] = useState("");
  const [messageInValidTitre, setMessageInValidTitre] = useState("");
  const [messageInValidDescription, setMessageInValidDescription] = useState("");
  
  const [messageInValidPrix, setMessageInValidPrix] = useState("");
  
  const [messageInValidMetrage, setMessageInValidMetrage ]= useState("");
  
  const [messageInValidSurfaceTerrain, setMessageInValidSurfaceTerrain] = useState("");
  
  const [messageInValidSurfaceHabitable, setMessageInValidSurfaceHabitable ]= useState("");
  
  const [messageInValidDateConstruction, setMessageInValidDateConstruction ]= useState("");
  
  const [messageInValidChambre, setMessageInValidChambre ]= useState("");
  
  const [messageInValidSalleBain, setMessageInValidSalleBain]= useState("");
  
  const [messageInValidEtage, setMessageInValidEtage ]= useState("");
  const [positionMap, setPositionMap ]= useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const fieldsForm = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/gouvernorat")

      .then((res) => {
        setGouvernorat(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/delegation")

      .then((res) => {
        setDelegation(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/categorie")

      .then((res) => {
        setCategorie(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   let currEnabled = [];
  //   let item = categorie.find((item) => item._id === idCategorie);
  //   if (
  //     item === undefined ||
  //     idCategorie.toLowerCase() === "trouver une categorie"
  //   )
  //     currEnabled = [];
  //   else currEnabled = [...item.props];

  //   let els = [...fieldsForm?.current?.elements];
  //   els = els.slice(4, els.length - 3);
  //   els.forEach((el) => {
  //     if (
  //       currEnabled.some(
  //         (item) =>
  //           item.toLowerCase().replaceAll(" ", "") ==
  //           el.name.toLowerCase().replaceAll(" ", "")
  //       )
  //     )
  //       el.disabled = false;
  //     else el.disabled = true;
  //   });
  // }, [idCategorie]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <br/>
         <br/>
         <br/>
         <card>  
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isVisibleLoading ? <Loader /> : null}

          <Box ref={fieldsForm} component="form" noValidate>
            <div
              className="font-bold text-xl mb-4"
              style={{ color: "#ea4888", textAlign: "center" }}
            >
              Ajouter une annonce
            </div>
            <RadioGroup name="use-radio-group" defaultValue="first">
              <div className="flex gap-4 mb-3 items-center justify-center">
                <input
                  className="w-5 h-5"
                  id="transaction"
                  type="radio"
                  value="A vendre"
                  checked
                  name="transaction"
                  label="first"
                  onClick={(e) => {
                    setTransaction(e.target.value);
                  }}
                />

                <label htmlFor="vendre">A vendre</label>
                <input
                  className="w-5 h-5"
                  id="transaction"
                  type="radio"
                  value="A Louer"
                  name="transaction"
                  label="Second"
                  onClick={(e) => {
                    setTransaction(e.target.value);
                  }}
                />
                <label htmlFor="louer">A louer</label>
              </div>
            </RadioGroup>

            {/* <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setIdCategorie(e.target.value);
              }}
            >
              <option value={"Trouver une categorie"}>
                Trouver une categorie
              </option>
              {categorie.map((categories) => {
                return <option value={categories._id}>{categories.nom}</option>;
              })}
            </Form.Select> */}


            
<Form.Select

aria-label="Default select example"
onChange={(e) => {
  setIdCategorie(e.target.value);
  setMessageInValidCategorie("")
}}
>
<option value={0}>Trouver une categorie</option>
{categorie.map((categories) => {
  return (
    <option value={categories._id}>{categories.nom}</option>
  );
})}
</Form.Select>


<font color="red">  {messageInValidCategorie}</font><br/>
<Form.Select

aria-label="Default select example"
onChange={(e) => {
  setIdGouvernorat(e.target.value);
  setMessageInValidGouvernorat("");
}}
>
<option value={0}>Trouver une gouvernorat</option>
{gouvernorat.map((gouvernorats) => {
  return (
    <option
    value={gouvernorats._id}>{gouvernorats.nom}</option>
  );
})}
</Form.Select>

<font color="red">  {messageInValidGouvernorat}</font><br/>
<div>
{idGouvernorat != "0" ? (
  <Form.Select
    aria-label="Default select example"
    onChange={(e) => {
      setIdDelegation(e.target.value);
      setMessageInValidDelegation("")
    }}
  >
    <option value={0}>Trouver une delegation</option>
    {delegation.map((delegations) => {
      if ( idDelegation != "0" || delegations.gouvernorat._id === idGouvernorat ) {
        return (
          <option value={delegations._id}>
            {delegations.nom}
          </option>
        );
      }
    })}

  </Form.Select>

) : null}    
<font color="red">  {messageInValidDelegation}</font>
</div>
<TextField
              className=""
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
                setMessageInValidTitre("")

              }}
            /><br/>
           <font color="red"> {messageInValidTitre}</font>
           <TextField
              className=" disabled:bg-opacity-40"
              margin="normal"
              required
              fullWidth
              id="Description"
              label="Description"
              name="Description"
              autoComplete="Description"
              autoFocus
              onChange={(e) => {
                setDescription(e.target.value);
                setMessageInValidDescription("")
              }}
            />
            <br/>
            <font color="red">  {messageInValidDescription}</font>
          
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Prix"
      aria-label="Prix"
      aria-describedby="basic-addon2"
      type="number"
      name="Prix"
                    autoComplete="Prix"
                    autoFocus
                    onChange={(e) => {
                      setPrix(e.target.value);
                      
                setMessageInValidPrix("")
                    }}
    />
    <InputGroup.Text id="basic-addon2"> DT</InputGroup.Text>
  </InputGroup>

  
                 
  <font color="red"> {messageInValidPrix} </font>
               
              
                <TextField
                    type="string"
                    className=""
                    margin="normal"
                    required
                    style={{ width: "400px" }}
                    id="positionMap"
                    label="positionMap"
                    defaultValue={0}
                    name="positionMap"
                    autoComplete="positionMap"
                    autoFocus
                    onChange={(e) => {
                      setPositionMap(e.target.value);
                      
                    }}
                  />


<InputGroup className="mb-3">
    <FormControl
      placeholder="Metrage"
      aria-label="Metrage"
      aria-describedby="basic-addon2"
      type="number"
      name="Metrage"
                    autoComplete="Metrage"
                    autoFocus
                    onChange={(e) => {
                      setMetrage(e.target.value);
                      
                setMessageInValidMetrage("")
                    }}
    />
    <InputGroup.Text id="basic-addon2">  m²</InputGroup.Text>
  </InputGroup>

              
            
  <font color="red"> {messageInValidMetrage}  </font>
              
<InputGroup className="mb-3">
    <FormControl
      placeholder="surfaceterrain"
      aria-label="surfaceterrain"
      aria-describedby="basic-addon2"
      type="number"
      name="surfaceterrain"
                    autoComplete="surfaceterrain"
                    autoFocus
                    onChange={(e) => {
                      setSurfaceterrain(e.target.value);
                
                    }}
    />
    <InputGroup.Text id="basic-addon2">  m²</InputGroup.Text>
  </InputGroup> 
                
                    
            {categorie.map((categories) => {
              if(categories._id === idCategorie   && categories.champObligatoire === "Oui"){
               
                return (
                  
                  <div>
                    <InputGroup className="mb-3">
    <FormControl
      placeholder="surfacehabitable"
      aria-label="surfacehabitable"
      aria-describedby="basic-addon2"
      type="number"
      name="surfacehabitable"
                    autoComplete="surfacehabitable"
                    autoFocus
                    onChange={(e) => {
                      setSurfacehabitable(e.target.value);
                      
                setMessageInValidSurfaceHabitable("")
                    }}
    />
    <InputGroup.Text id="basic-addon2">   m²</InputGroup.Text>
  </InputGroup>


                 
            {messageInValidSurfaceHabitable}
                
                
           

<TextField
              margin="normal"         
              required
              fullWidth
              id="dateConstruction"
              type="date"
              
              name="dateConstruction"
              autoComplete="dateConstruction"
              autoFocus
              onChange={(e)=>{
                setDateconstruction(e.target.value)
                
                setMessageInValidDateConstruction("")
              }}/>
            
            <br/>
            {messageInValidDateConstruction}
            <TextField
              className=" disabled:bg-opacity-40"
              margin="normal"
              fullWidth
              type="number"
              id="chambre"
              label="chambre"
              name="chambre"
              autoComplete="chambre"
              autoFocus
              onChange={(e) => {
                setChambre(e.target.value);
                
                
              }}
            />
<br/>
            <TextField
              className=" disabled:bg-opacity-40"
              margin="normal"
              fullWidth
              id="sallebain"
              label="sallebain"
              name="sallebain"
              type="number"
              autoComplete="sallebain"
              autoFocus
              onChange={(e) => {
                setSallebain(e.target.value);
              }}
            />
           <br/>
            {
              transaction==="A Louer" ?
              <TextField
              className=" disabled:bg-opacity-40"
              margin="normal"
              fullWidth
              id="Nombre de jour"
              label="Nombre de jour"
              name="Nombre de jour"
              autoComplete="Nombre de jour"
              autoFocus
              onChange={(e) => {
                setPiece(e.target.value);
              }}
            />
            :null
            }
          
            <TextField
              className=" disabled:bg-opacity-40"
              margin="normal"
              fullWidth
              id="nbreEtage"
              label="nombre etage"
              type="number"
              name="nbreEtage"
              autoComplete="nbreEtage"
              autoFocus
              onChange={(e) => {
                setNbreEtage(e.target.value);
              }}
            />


                  </div>
                );
            }
              })}

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control
                type="file"
                multiple
                onChange={(e) => {
                  setSearchImg(e.target.files);
                }}
              />
            </Form.Group>

            <Button
              variant="contained"
              disabled={disable}
              fullWidth
              onClick={() => {
                setIsVisibleLoading(true);
                setDisable(true);

             if (titre.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);

                  setMessageInValidTitre("votre titre est Vide.");
                  setIsVisible(true);
                } else if (description.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidDescription("votre description est Vide.");
                  setIsVisible(true);
                } else if (prix.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidPrix("votre prix est Vide.");
                  setIsVisible(true);
                } else if (metrage.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidMetrage("votre metrage est Vide.");
                  setIsVisible(true);
                } 
                else if (idCategorie === "0") {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidCategorie("votre catégorie est Vide.");
                  setIsVisible(true);
                } else if (idGouvernorat === "0") {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidGouvernorat("votre champ est Vide.");
                  setIsVisible(true);
                } else if (idDelegation === "0") {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidDelegation("votre champ est Vide.");
                  setIsVisible(true);
                }else if (surfaceterrain.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidSurfaceTerrain("votre surfaceterrain est Vides.");
                  setIsVisible(true);
                }
                
       
                                    
            {categorie.map((categories) => {
              if(categories._id === idCategorie   && categories.champObligatoire === "Oui"){
             if (surfacehabitable.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidSurfaceHabitable("votre surfacehabitale est Vide.");
                  setIsVisible(true);
                }else if (dateconstruction.trim() === "0") {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidDateConstruction("votre dateconstruction est Vide.");
                  setIsVisible(true);
                } else if (chambre.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidChambre("votre chambre est Vide.");
                  setIsVisible(true);
                } else if (sallebain.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidSalleBain("votre sallebain est Vide.");
                  setIsVisible(true);
                }
                 else if (nbreEtage.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValidEtage("votre nbreEtage est Vide.");
                  setIsVisible(true);
                }else {
                  /*
   var today = new Date();
    var birthDate = new Date(e.target.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    
    if (age <= 18) 
    {
        ....
    }
   
    
     */
                  const formData = new FormData();
                  formData.append("titre", titre);
                  formData.append("description", description);
                  formData.append("prix", prix);
                  
                  formData.append("positionMap", positionMap);
                  formData.append("metrage", metrage);
                  formData.append("surfacehabitable", surfacehabitable);
                  formData.append("surfaceterrain", surfaceterrain);
                  formData.append("dateconstruction", dateconstruction);

                  formData.append("chambre", chambre);
                  formData.append("sallebain", sallebain);
                  formData.append("piece", piece);
                  formData.append("nbreEtage", nbreEtage);

                  formData.append("transaction", transaction);
                  formData.append("categorie", idCategorie);

                  formData.append("gouvernorat", idGouvernorat);
                  formData.append("delegation", idDelegation);
                  formData.append("user", id);
                  for (let i = 0; i < searchImg.length; i++) {
                    formData.append("searchImg", searchImg[i]);
                  }
                  axios
                    .post("http://localhost:7000/api/annonce/create", formData)
                    .then((res) => {
                      console.log(res);
                      //this.props.history.push('/verification');

                      window.location = "/";

                      setDisable(false);
                    });
                }
                
                
              }else if(categories._id === idCategorie   && categories.champObligatoire === "Non"){
                /*
 var today = new Date();
  var birthDate = new Date(e.target.value);
  var age = today.getFullYear() - birthDate.getFullYear();
  
  if (age <= 18) 
  {
      ....
  }
 
  
   */
                const formData = new FormData();
                formData.append("titre", titre);
                formData.append("description", description);
                formData.append("prix", prix);
                
                formData.append("positionMap", positionMap);
                formData.append("metrage", metrage);
                formData.append("surfacehabitable", surfacehabitable);
                formData.append("surfaceterrain", surfaceterrain);
                formData.append("dateconstruction", dateconstruction);

                formData.append("chambre", chambre);
                formData.append("sallebain", sallebain);
                formData.append("piece", piece);
                formData.append("nbreEtage", nbreEtage);

                formData.append("transaction", transaction);
                formData.append("categorie", idCategorie);

                formData.append("gouvernorat", idGouvernorat);
                formData.append("delegation", idDelegation);
                formData.append("user", id);
                for (let i = 0; i < searchImg.length; i++) {
                  formData.append("searchImg", searchImg[i]);
                }
                axios
                  .post("http://localhost:7000/api/annonce/create", formData)
                  .then((res) => {
                    console.log(res);
                    //this.props.history.push('/verification');

                    window.location = "/";

                    setDisable(false);
                  });
              }
              
            })}
                
                
                
                
               
                
              }}
            >
              Energistrer
            </Button>
          </Box>
        </Box>
        {/* {isVisible ? <Alert messageInValid={messageInValid} /> : null} */}

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </card>  
    </ThemeProvider>
  );
}
