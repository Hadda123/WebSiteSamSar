import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFetch } from "use-http";
import { useLocalStorage } from "react-use-storage";

export default function ScrollableTabsButtonAuto({
  currCategory,
  setCurrCategory,
}) {
  const { get } = useFetch("http://localhost:7000");
  const fetchCateg = async () => {
    let categorie = await get("/api/categorie");
    categorie.unshift({ nom: "tout les categories" });
    categorie = [...new Set(categorie.map((_) => _.nom))];
    return categorie;
  };

  const [categorie, setCategories] = useState([]);

  useEffect(() => {
    fetchCateg().then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-4 items-center justify-center font-semibold flex gap-2 overflow-x-auto glass flex-wrap ">
      {categorie?.map((categories, i) => {
        return (
          <div
            key={i}
            className={`flex items-center justify-center cursor-pointer z-10 p-2 rounded capitalize hover:text-[#ff2a7f] font-semibold transition-all duration-300 ${
              currCategory === categories &&
              "border-b-4 border-b-[#ff0066] text-[#ff2a7f] font-bold"
            } `}
            onClick={() => {
              setCurrCategory(categories);
            }}
          >
            {categories}
          </div>
        );
      })}
    </div>
  );
}
