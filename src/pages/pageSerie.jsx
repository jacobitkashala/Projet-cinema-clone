import React,{useState,useEffect} from "react";
import Header from "../componentShow/Header";
import Footer from "../componentShow/Footer";
import GenreSerie from "../componentShow/GenreSerie";
import PopularSerie from "../componentShow/PopularSerie";
import ActeurSerie from "../componentShow/ActeurSerie";
import { RestDataSource } from "../webservice/RestDataSource";

export default function PageSerie() {
  
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
    <div className="container">
      <Header />
      <GenreSerie clickBtngenre={clickBtngenre} />
      <PopularSerie containsGenreData={containsGenreData} isClick={isClick} />
      <ActeurSerie />
      <Footer />
    </div>
  );
}
