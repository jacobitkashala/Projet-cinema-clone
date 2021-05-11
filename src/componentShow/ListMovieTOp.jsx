import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function ListMovieTOp() {
  const [listTopMovie, setListTopmovie] = useState([]);

  const topMovieUrl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&page=1";

  const restDataSource = new RestDataSource(topMovieUrl);

  const urlImage = "https://image.tmdb.org/t/p/w400/";

  useEffect(function () {
    restDataSource.getData((data) => {
      setListTopmovie(data);
    });
  }, []);
  let topMovies = [];

  if (listTopMovie.results !== undefined) {
    const { page, results, total_pages, total_results } = listTopMovie;
    const movies = [...results];
    topMovies = movies.slice(0, 4).map((item, index) => {
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
    <div>
      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            TOP MOVIE
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="line">
            <FaArrowCircleLeft className="fa" />
            <FaArrowCircleRight className="fa" />
          </div>
        </div>
      </div>
      <div className="row mt-3">{topMovies}</div>
    </div>
  );
}
