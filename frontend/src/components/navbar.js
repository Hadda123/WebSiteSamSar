import React from "react";
//import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { useLocalStorage } from "react-use-storage";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Butt from './ButtonMenu';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const [isconnect, setisconnect, removeisconnect] = useLocalStorage(
    "isconnect",
    false
  );
  const [id, setid, removeid] = useLocalStorage("id", "");
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <nav className="flex justify-between w-full px-4 items-center bg-[#6169b0] h-24 fixed top-0 md:static z-50 ">
      <a className="text-lg font-bold" href="/">
        SamSar<span className="text-[#ea4888] font-black">Agency</span>
      </a>
      <div
        className="md:hidden block cursor-pointer"
        onClick={() => setShowNavLinks((prev) => !prev)}
      >
        <svg
        className={`${showNavLinks && 'fill-[#ea4888] -rotate-90'} h-6 w-6 transition-all duration-300`}

          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`${showNavLinks ? "scale-y-100" : "scale-y-0"}  
        w-[calc(100vw)] origin-top justify-end flex-col-reverse fixed top-24 left-0 right-0 bottom-0 md:scale-100 flex transition-all md:flex duration-300  md:flex-row gap-2 md:static md:w-fit z-50 bg-[#6169b0] `}
      >
        
        <a href="/" className="btn"> <HomeIcon/> </a>
         {isconnect ? (
          
             <Butt/>):
             (  <>  </>)}

       
       
        <a
          href={`
      ${isconnect ? "/addAnnonce" : "/login"}
          `}
          className="nav-link cursor-pointer btn primary"
        >
          <AddIcon />
          Déposer une annonce
        </a>

        <>
          {isconnect ? (
              <div>
            <a
              href="/"
              className="nav-link btn"
              onClick={() => {
                setisconnect(false);
                setid("");
              }}
            >
              Deconnecter
            </a>
            
             </div>
          ) : (
            <>
              <a className="nav-link active btn" href="/sendSMS">
                S'inscrire
              </a>
              <a className="nav-link btn " href="/login">
                Connecter
              </a>
            </>
          )}
        </>
      </div>
    </nav>
  );
};

export default Navbar;
