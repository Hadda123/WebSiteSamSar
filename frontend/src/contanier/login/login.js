import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocalStorage } from "react-use-storage";
import Alert from "../../verification/alert";
import Navbar from "../../components/navbar";
import Loader from "../../verification/loader";
import useFetch from "use-http";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        SamSar Agency
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
  const { get, post, response, loading, error } = useFetch(
    "http://localhost:7000"
  );

  const [id, setid, removeid] = useLocalStorage("id", "");
  const [user, setUser] = useState("");
  const [numeroTel, setNumeroTel, removeNumeroTel] = useLocalStorage(
    "numeroTel",
    ""
  );
  const [isconnect, setisconnect, removeisconnect] = useLocalStorage(
    "isconnect",
    false
  );
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  const [messageInValidPassword, setMessageInValidPassword] = useState("");
  const [messageInValidLogin, setMessageInValidLogin] = useState("");
  const [messageInValid, setMessageInValid] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const [isConnect, setIsConnect] = useLocalStorage("isConnect", "");

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Box
        component="form"
        noValidate
        className=" w-full max-w-[450px] mx-auto mt-32 px-4 "
      >
        <div className="mx-auto w-fit"> {isVisibleLoading && <Loader />}</div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="Login"
          label="Login"
          name="Login"
          autoComplete="Login"
          autoFocus
          onChange={(e) => {
            setLogin(e.target.value);
            setMessageInValidLogin("")
          }}
        />

<font color="red">  {messageInValidLogin}</font>
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="password"
          name="password"
          type="password"
          autoComplete="Password"
          autoFocus
          onChange={(e) => {
            setPassword(e.target.value);
            setMessageInValidPassword("")
          }}
        />

<font color="red">  {messageInValidPassword}</font>
        <br />
        <br />

        <Button
          variant="contained"
          disabled={disable}
          fullWidth
          onClick={async () => {
            setIsVisibleLoading(true);
            setDisable(true);
        if (login.trim().length === 0) {
              setDisable(false);
              setIsVisibleLoading(false);

              setMessageInValidLogin("votre login est Vide.");
        
            } else if (password.trim().length === 0) {
              setDisable(false);
              setIsVisibleLoading(false);
              setMessageInValidPassword("votre password est Vides.");
              
            } else {
              if (login === "admin" && password === "admin") {
                window.location = "/gestionCategorie";
                setDisable(false);

                setIsVisibleLoading(true);
                setisconnect(true);
              } else {
                const res = await post("/api/user/connect", {
                  login,
                  password,
                });

                if (res.reponse) {
                  window.location = "/";
                  setNumeroTel("");
                  setDisable(false);
                  setisconnect(true);
                  setid(res.id);
                } else {
                  setDisable(false);
                  setMessageInValid("votre données invalide.");
                  setIsVisible(true);
                  setIsVisibleLoading(false);
                  setisconnect(false);
                }
              }
            }
          }}
        >
          {" "}
          Connexion
        </Button>

        <>{isVisible ? <Alert messageInValid={messageInValid} /> : null}</>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
}
