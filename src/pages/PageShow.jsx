import React, { useEffect, useState } from "react";
import Header from "../componentShow/Header";
import Listgenre from "../componentShow/ListGenre";
import { RestDataSource } from "../webservice/RestDataSource";
import Listmovie from "../componentShow/ListMovie";
import Auteur from "../componentShow/Auteur";
import TopMovies from "../componentShow/TopMovie";
import Footer from "../componentShow/Footer";

export default function PageShow() {
  const [id, setId] = useState("");
  const [containsGenreData, setContainsGenreData] = useState([]);
  const [isClick, setIsClick] = useState(false);
 
  const movieGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${id}&=&with_watch_monetization_types=flatrate`;

  const restDataSource = new RestDataSource(movieGenreUrl);

  useEffect(() => {
    restDataSource.getData((data) => {
      setContainsGenreData(data);
    });
  }, [id]);

  const clickBtngenre = (id) => {
    setIsClick(true);
    setId(id);
  };
  
  return (
    <div>
      <Header />
      <Listgenre clickBtngenre={clickBtngenre} />
      <Listmovie containsGenreData={containsGenreData} isClick={isClick} />
      <Auteur />
      <TopMovies />
      <Footer />
    </div>
  );
}
