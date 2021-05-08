import React from "react";
import mortalCombat from "../image/mortal.jpeg";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";

export default function CardFilm({ movie }) {
  const { adult, poster_path, title, release_date, overview } = movie;
  // if(movie !== undefined){
  // {adult,poster_path,title,release_date,overview }=movie;
  // }
  //https://image.tmdb.org/t/p/original/"+`${firstMovie.poster_path}`+") no-repeat  left 100% / 100% 100%  border-box",
  //adult,poster_path,title,release_date,overview
  return (
    <div className="contenaire-card card-presentation">
      <div className="card col-sm-4">
        <div className="image-film">
          <img
            className="presenetation"
            src={"https://image.tmdb.org/t/p/w400/" + `${poster_path}`}
          />
          <i class="far fa-play-circle icon-lecteur  fa-7x"></i>
        </div>
        
        <div className="card-body w-80">
          <h5 className="card-title">Titre: {title}</h5>
          <h5 className="card-title">Année de sortie: {release_date}</h5>
          
        </div>
      </div>
    </div>
  );
}
