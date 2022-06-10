import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SendSMS from "./login/sendSMS";
import Verification from "./login/verification";
import Login from "./login/login";
import ProfileUser from "./user/home/profileUser"
import Register from "./login/register";
import AddAnnonce from "./user/annonce/addAnnonce";
import ModifyProfile from './user/home/modifyProfile';
import Home from "./user/home/home";
import Footer from "../components/footer";
import Card from "./user/home/card";
import Information from "./user/home/information";
import GestionCategorie from "./admin/categorie/gestionCategorie";
import GestionGouvernorat from "./admin/gouvernorat/gestionGouvernorat";
import GestionDelegation from "./admin/delegation/gestionDelegation";
import GestionUtilisateur from "./admin/user/gestionUtilisateur";
import GestionAnnonce from "./admin/annonce/gestionAnnonce";
import GestionRéclamation from "./admin/reclamation/gestionRéclamation";

import AnnonceRéclamation from "./admin/reclamation/annonceRéclamation";
import Chart from './admin/chart'
export default function PageRoute() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Switch>
            <Route
              path="/gestionRéclamation"
              exact
              component={GestionRéclamation}
            />
              <Route
              path="/annonceRéclamation"
              exact
              component={AnnonceRéclamation}
            />
<Route
              path="/chart"
              exact
              component={Chart}
            />
            <Route
              path="/modifyProfile"
              exact
              component={ModifyProfile}
            />
<Route
              path="/profileUser"
              exact
              component={ProfileUser}
            />
            <Route

              path="/gestionUtilisateur"
              exact
              component={GestionUtilisateur}
            />
            
            <Route
              path="/gestionGouvernorat"
              exact
              component={GestionGouvernorat}
            />
            <Route
              path="/gestionDelegation"
              exact
              component={GestionDelegation}
            />
            <Route path="/gestionAnnonce" exact component={GestionAnnonce} />
            <Route
              path="/gestionCategorie"
              exact
              component={GestionCategorie}
            />

            <Route path="/sendSMS" exact component={SendSMS} />
            <Route path="/login" exact component={Login} />

            <Route path="/verification" exact component={Verification} />

            <Route path="/register" exact component={Register} />

            <Route path="/addAnnonce" exact component={AddAnnonce} />

          
            <Route path="/card" exact component={Card} />

            <Route path="/" exact component={Home} />

            <Route path="/information/:id" exact component={Information} />
            <Route
              path="/*"
              exact
              element={<p>There's nothing here: 404!</p>}
            />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
