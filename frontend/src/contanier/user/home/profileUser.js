import {useState} from 'react'
import { useLocalStorage } from "react-use-storage";
import * as React from "react";
import CardUser from "./cardUser";
import ListCategoris from "../../../components/ListCategorie";
import Grid from "@mui/material/Grid";
import Navbar from "../../../components/navbar";
import NavFooter from "../../../components/NavFooter";
import { useEffect } from "react";
import axios from "axios";

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



        {/* <ListCategoris currCategory={currCategory} setCurrCategory={setCurrCategory} />
          */}
      </div>
      <hr />
      <CardUser />
    </div>
  );
}
