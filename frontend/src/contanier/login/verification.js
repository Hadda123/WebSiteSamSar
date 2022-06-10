import { useState } from "react";
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
import Loader from "../../verification/loader";
import Alert from "../../verification/alert";
import Navbar from "../../components/navbar";
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
        SamSarAgency
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
  const [numeroTel, setNumeroTel, removeNumeroTel] = useLocalStorage(
    "numeroTel",
    ""
  );
  const [codeSaisie, setCodeSaisie] = useState("");
  const [disable, setDisable] = useState(false);
  const [messageInValid, setMessageInValid] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {isVisibleLoading ? <Loader /> : null}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="numTel"
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
              id="numTel"
              label="Code SMS"
              name="numTel"
              autoComplete="numTel"
              autoFocus
              onChange={(e) => {
                setCodeSaisie(e.target.value);
              }}
            />
            <Button
              variant="contained"
              disabled={disable}
              fullWidth
              onClick={() => {
                setIsVisibleLoading(true);
                setDisable(true);
                if (codeSaisie.trim().length === 0) {
                  setDisable(false);
                  setIsVisibleLoading(false);
                  setMessageInValid("votre champ est Vide.");
                  setIsVisible(true);
                } else {
                  axios
                    .post("http://localhost:7000/api/user/verifycodesms", {
                      numTel: numeroTel,
                      codeSaisie,
                    })
                    .then((res) => {
                      console.log(res);
                      window.location = "/register";
                      setDisable(false);
                    })
                    .catch((error) => {
                      console.log(error);
                      setDisable(false);
                      setMessageInValid("votre données invalide.");
                      setIsVisible(true);
                      setIsVisibleLoading(false);
                    });
                }
              }}
            >
              Connexion
            </Button>

            <>{isVisible ? <Alert messageInValid={messageInValid} /> : null}</>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
