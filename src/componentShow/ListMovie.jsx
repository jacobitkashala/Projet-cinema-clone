import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";

export default function ListMovie() {
  const listMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

  const urlImage = "https://image.tmdb.org/t/p/w400/";
  const [listMovie, setListMovie] = useState([]);
  const restDataSource = new RestDataSource(listMovieUrl);

  useEffect(function () {
    restDataSource.getData((data) => {
      setListMovie(data);
    });
  }, []);
  let movies = [];
  let movieList = [];
  if (listMovie.results !== undefined) {
    const { page, results, total_pages, total_results } = listMovie;
    movies = results;

    movieList = movies.slice(0, 4).map((item, index) => {
      return (
        <div className="col-md-3 col-sm-6" key={index}>
          <div className="card"></div>
          <Link to={`/movie/${item.id}`}>
            <img
              className="img-fluid"
              src={urlImage + item.poster_path}
              alt={item.title}
            />
          </Link>
          <div className="mt-3">
            <h5 style={{ fontWeight: "border" }}>{item.title} </h5>
            <p> {item.vote_average}</p>
            <ReactStars
              count={item.vote_average}
              size={20}
              color1={"#f4c10f"}
            ></ReactStars>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="row mt-3">
      {movieList}
      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            TREDING PERSONS ON THIS WEEK
          </p>
        </div>
      </div>
    </div>
  );
}
