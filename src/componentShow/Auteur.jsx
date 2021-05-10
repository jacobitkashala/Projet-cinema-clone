import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";

export default function Auteur() {
  const [persons, setPersons] = useState([]);

  const auteurUrl =
    "https://api.themoviedb.org/3/trending/person/week?api_key=c8697268acc5406f1d3c61343bbfd606";

  const restDataSource = new RestDataSource(auteurUrl);
  const urlImage = "https://image.tmdb.org/t/p/w400/";

  useEffect(function () {
    restDataSource.getData((data) => {
      setPersons(data);
    });
  }, []);

  let listPersons = [];

  if (persons.results !== undefined) {
    // listPersons = [...persons];
    const { page, results, total_pages, total_results } = persons;
    listPersons = results.slice(0, 4).map((item, index) => {
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
    console.log(persons);
  }

  return <div className="row mt-3">{listPersons}</div>;
}
