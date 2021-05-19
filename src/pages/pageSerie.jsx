import React from "react";
import Header from "../componentShow/Header";
import Footer from "../componentShow/Footer";
import GenreSerie from "../componentShow/GenreSerie";
import PopularSerie from "../componentShow/PopularSerie";
import ActeurSerie from "../componentShow/ActeurSerie";

export default function pageSerie() {
  return (
    <div className="container">
      <Header />
      <GenreSerie />
      <PopularSerie />
      <ActeurSerie />
      <Footer />
    </div>
  );
}
