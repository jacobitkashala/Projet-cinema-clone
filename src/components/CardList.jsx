import React, { useContext } from "react";
import CardFilm from "./CardFilm";
import { contexDateMoviePopular } from "../useComponent/useContext";

export default function CardList() {
  
  const movipopular = useContext(contexDateMoviePopular);

  const { page, results, total_pages, total_results } = movipopular;
  let reversedMovies = [];
  let treeMovies = [];

  if (results !== undefined) {
    reversedMovies = results.reverse();
    treeMovies = reversedMovies.filter((movie, index) => index <= 2);
  }

  ///console.log(treeMovies);

 

  return (
    <div className="cardlist">
        {
          treeMovies.map((movie,index)=>(
            <CardFilm key={index} movie={movie} />
            )
          )
          }
      </div>
  );
}
