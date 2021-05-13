import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Auteur() {
  const [persons, setPersons] = useState([]);
  const [idPage, setIdPage] = useState(1);
  const acteurUrl =`https://api.themoviedb.org/3/trending/person/week?api_key=c8697268acc5406f1d3c61343bbfd606&page=${idPage}`;

  const restDataSource = new RestDataSource(acteurUrl);
  const urlImage = "https://image.tmdb.org/t/p/w400/";

  useEffect(
    function () {
      restDataSource.getData((data) => {
        setPersons(data);
      });
    },
    [idPage]
  );
const clickLefrAuteur=()=>{
  idPage == 1 ? setIdPage() : setIdPage(d=>(d-1));

}
const clickRightAuteur=()=>{
  idPage == 400 ? setIdPage() : setIdPage(d=>(d+1));

}
  let listPersons = [];

  if (persons.results !== undefined) {
    const { page, results, total_pages, total_results } = persons;
    listPersons = results.slice(0, 8).map((item, index) => {
      return (
        <div className="col-md-3 col-sm-6 text-center" key={index}>
          <img
            className="img-fluid "
            src={urlImage + item.profile_path}
            alt={item.name}
          />
          <p className="font-weigth-bold text-center">{item.name} </p>
          <p
            className="font-weigth-bold text-center"
            style={{ color: "#5a606b" }}
          >
            {item.known_for_department}{" "}
          </p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            TREDING PERSONS ON THIS WEEK
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="line">
            <div onClick={clickLefrAuteur}>
              <FaArrowCircleLeft className="fa" />
            </div>
            <div onClick={clickRightAuteur}>
              <FaArrowCircleRight className="fa" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">{listPersons}</div>
    </div>
  );
}
