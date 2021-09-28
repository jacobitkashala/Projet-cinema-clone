import React, { useEffect, useState,useMemo } from "react";
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
 
  const movieGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${id}&=&with_watch_monetization_types=flatrate`;

 const restDataSource =useMemo(() =>{
    const restData = new RestDataSource(movieGenreUrl)
    return restData ;
  }, [movieGenreUrl] )
 

  useEffect(() => {
    restDataSource.getData((data) => {
      setContainsGenreData(data);
    });
  },[restDataSource]);

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
