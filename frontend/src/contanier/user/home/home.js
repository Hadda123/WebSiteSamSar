import {useState} from 'react'
import { useLocalStorage } from "react-use-storage";

import Card from "./card";
import ListCategoris from "../../../components/ListCategorie";
import Grid from "@mui/material/Grid";
import Navbar from "../../../components/navbar";
import NavFooter from "../../../components/NavFooter";

export default function ClippedDrawer() {
  const [isconnect, setisconnect, removeisconnect] = useLocalStorage(
    "isconnect",
    false
  );
    const [currCategory, setCurrCategory] = useState('tout les categories')
  return (
    <div>
      <Navbar />
      <NavFooter />
      <div className="mt-4">
        <ListCategoris currCategory={currCategory} setCurrCategory={setCurrCategory} />
      </div>
      <hr />
      <Card currCategory={currCategory} setCurrCategory={setCurrCategory} />
    </div>
  );
}
