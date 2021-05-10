import React, { useCallback, useState, useContext } from "react";
import "react-bootstrap-carousel";
import img3 from "../image/hero1.jpg";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import { contexDateMoviePopular } from "../useComponent/useContext";

export default function Hero() {
  const movipopular = useContext(contexDateMoviePopular);
  const { page, results, total_pages, total_results } = movipopular;
  let firstMovie = {};

  if (results !== undefined) {
    firstMovie = results.shift();
  }
  return (
    <div className="container row topmoviefirst">
      <div className="col-sm-10">
        <div className="carousel-center  ">
          <img
            style={{
              height: "70vh",
              position: "relative",
              width: "80vw",
              top: "15Vh",
              left:"5vw",
              transform:"translatey(-50)"
            }}
            src={`https://image.tmdb.org/t/p/original/${firstMovie.poster_path}`}
            alt=""
            srcset=""
          />
        </div>
        <div className="d-flex row w-25 infomovie">
          <div className="text-white  col-sm-10 bgtransparent">
            <h3 className="mb-2 h3 bgtransparent ">Titre: {firstMovie.title}</h3>
            <h4 className="mb-2 bgtransparent">Date de Soritie: {firstMovie.release_date}</h4>
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
