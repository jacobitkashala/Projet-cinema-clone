import React, { useState, useEffect } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import CardRomatic from "./CardRomatic";
import RBCarousel from "react-bootstrap-carousel";
import { RestDataSource } from "../webservice/RestDataSource";

 function MovieRomatic() {
  const [dataRomatic, setDataRomatic] = useState([]);

  const ROMATICS = new RestDataSource(
    "https://api.themoviedb.org/3/discover/movie?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&page=5&without_genres=107496"
  );

  useEffect(function () {
    ROMATICS.getData((data) => {
      setDataRomatic(data);
    });
  }, []);

  let movieRomatics = [];

  if (dataRomatic.results !== undefined) {
    var { page, results, total_pages, total_results } = dataRomatic;
    movieRomatics = dataRomatic.results.slice(0, 7);
  }

  
  return (
    <>
      <div className="contenaire">
        <div className="row">
          <div className="col">
            <RBCarousel
              className="carousel-fade"
              autoplay={true}
              pauseOnVisibility={true}
              slideshowSpeed={5000}
              version={4}
              indicators={false}
            >
              {movieRomatics.map((movie, index) => ( 
                <CardRomatic key={index} {...movie} />
                ))}
            </RBCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
