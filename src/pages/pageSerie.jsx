import React,{useState,useEffect, useMemo} from "react";
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

  const movieGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${id}&=&with_watch_monetization_types=flatrate`;

  const restDataSource=useMemo(()=>{ 
    const restDataSource = new RestDataSource(movieGenreUrl);
    return restDataSource;
  },[movieGenreUrl])
 

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
    <div className="container">
      <Header />
      <GenreSerie clickBtngenre={clickBtngenre} />
      <PopularSerie containsGenreData={containsGenreData} isClick={isClick} />
      <ActeurSerie />
      <Footer />
    </div>
  );
}
