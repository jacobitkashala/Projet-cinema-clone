import React, { useState } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Auteur() {
  const [persons, setPersons] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  let totalPage = 0;
  let listPersons = [];
  const Urlactor = `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&page=${pageNumber}`;
  const urlImage = "https://image.tmdb.org/t/p/w400/";

  const restDataSource = new RestDataSource(Urlactor);

  (async function () {
    restDataSource.getData((data) => {
      setPersons(data);
    });
  })();
  const clickPreviousActor = () => {
    pageNumber === 1
      ? setpageNumber((pageCurrent) => pageCurrent * 1)
      : setpageNumber((pageCurrent) => pageCurrent - 1);
  };
  const clickNextActor = () => {
    pageNumber === 47
      ? setpageNumber((pageCurrent) => pageCurrent * 1)
      : setpageNumber((pageCurrent) => pageCurrent + 1);
  };

  if (persons.results !== undefined) {
    const { results, total_pages } = persons;
    totalPage = total_pages;
    listPersons = results.slice(0, 8).map((item, index) => {
      return (
        <div className="col-md-3 col-sm-3 text-center" key={index}>
          <img
            className="img-fluid "
            src={urlImage + item.profile_path}
            alt={item.name}
          />
          <p
            className="font-weigth-bold text-center"
            style={{ fontSize: "1.1rem" }}
          >
            {item.name}{" "}
          </p>
          <p
            className="font-weigth-bold text-center"
            style={{ color: "#5a606b" }}
          >
            {item.known_for_department}
          </p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="row mt-3">
        <div className="line">
          <div onClick={clickPreviousActor}>
            <FaArrowCircleLeft className="fa" />
          </div>
          <div className="paginateindice">
            {pageNumber}/{totalPage}
          </div>
          <div onClick={clickNextActor}>
            <FaArrowCircleRight className="fa" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h1 className="font-weight-bold" style={{ color: "#5a606b" }}>
            person
          </h1>
        </div>
      </div>
      <div className="row mt-3">{listPersons}</div>
    </div>
  );
}
