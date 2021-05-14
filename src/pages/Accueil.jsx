import React, { Component } from "react";

import Navigation from "../components/Navigation";
import NavigationSous from "../components/NavigationSous";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Accueil = () => {
  

  return (
    <div className="container-fluid">
      <Navigation />
      <NavigationSous />
      <Footer />
      {/* <ColectionImage/> */}
    </div>
  );

};

export default Accueil;