import React, { useCallback, useState,useContext } from "react";
import img3 from "../image/hero1.jpg";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import {contexDateMoviePopular} from "../useComponent/useContext"


export default function Hero() {
  const movipopular = useContext(contexDateMoviePopular);
  const {page, results, total_pages, total_results}=movipopular ;
  let firstMovie={};

  if(results !== undefined){
    firstMovie=results.shift();
  }
  return (
    <div className="container-fluid">
      <div
        className="p-5 bg-image col-sm-11"
        style={{
          paddingBottom: "10px",
          background: "url(https://image.tmdb.org/t/p/original/"+`${firstMovie.poster_path}`+") no-repeat  left 100% / 100% 100%  border-box",
          height: "90vh",
          width: "97vw",
        }}

      >
        <div className="d-flex row w-25 dflexrow">
          <div className="text-white  col-sm-10">
            <h3 className="mb-2 h3 ">Titre: {firstMovie.title}</h3>
            <h4 className="mb-2">Date de Soritie: {firstMovie.release_date}</h4>
          
            <a
              className="btn btn-outline-light btn-sm-5"
              href="#!"
              role="button"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
