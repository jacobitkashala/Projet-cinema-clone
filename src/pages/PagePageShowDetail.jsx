import React, { useState, useEffect } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { RestDataSource } from "../webservice/RestDataSource";

export default function PagePageShowDetail({ match }) {
  const [primaryInformation, setPrimaryInformation] = useState([]);
  const [casting, setCasting] = useState([]);
  let idMovie = match.params;
  //console.log(id);
  const urlPrimaryInformation = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US`;
  const urlCastCrew = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US`;
  const restDataSourcePInfo = new RestDataSource(urlPrimaryInformation);
  useEffect(() => {
    restDataSourcePInfo.getData((data) => {
      setPrimaryInformation(data);
    });
  }, [idMovie ]);
  console.log(primaryInformation);

  return (
    <div>
      <div>
        <FaArrowCircleLeft className="fa" />
      </div>
      <div className="container">
        <div className="row mt-2">
          <div className="col text-center" style={{ width: "100%" }}>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
