import React, { useEffect, useState } from "react";
import Acceuil from "./pages/Accueil";
import Load from "./components/Loader";
import { contexDateMoviePopular } from "./useComponent/useContext";
import axios from "axios";
import News from "./components/News";

const Home = () => {
  const [movieTop, setMovieTop] = useState([]);

  useEffect(() => {
      const getPopularMovies = async () => {
        const popularMovies = await axios(
          "https://api.themoviedb.org/3/movie/popular?api_key=c8697268acc5406f1d3c61343bbfd606"
        );
        setMovieTop(popularMovies.data);
      };
      getPopularMovies();  
    }, []);
   

  return (
    <div> 
      
        <contexDateMoviePopular.Provider value={movieTop}>
          <Acceuil />
        </contexDateMoviePopular.Provider>
  

    </div>
  );
};
export default Home;
