import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function TopMovies() {

  const [listTopMovie, setListTopmovie] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  let topMovies = [];
  let totalPage = 0;

  const urlImage = "https://image.tmdb.org/t/p/w400/";
  const topMovieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&page=${pageNumber}`;

  const restDataSource=useMemo(()=>{
     const restDataSource = new RestDataSource(topMovieUrl);
     return restDataSource;
  },[topMovieUrl])
 

  useEffect(
    function () {
      restDataSource.getData((data) => {
        setListTopmovie(data);
      });
    },
    [restDataSource]
  );

  const clickPreviousTopMovie = () => {
    pageNumber === 1
      ? setpageNumber((pageCurrent) => pageCurrent * 1)
      : setpageNumber((pageCurrent) => pageCurrent - 1);
  };
  const clickNextTopMovie = () => {
    pageNumber === 47
      ? setpageNumber((pageCurrent) => pageCurrent * 1)
      : setpageNumber((pageCurrent) => pageCurrent + 1);
  };

  if (listTopMovie.results !== undefined) {
    const { results, total_pages } = listTopMovie;
    totalPage = total_pages;
    const movies = [...results];
    topMovies = movies.slice(0, 8).map((item, index) => {
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
          <div className="line">
            <div onClick={clickPreviousTopMovie}>
              <FaArrowCircleLeft className="fa" />
            </div>
            <div className="paginateindice">
              {pageNumber}/{totalPage}
            </div>
            <div onClick={clickNextTopMovie}>
              <FaArrowCircleRight className="fa" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h2 className="font-weight-bold" style={{ color: "#5a606b" }}>
            Top Film
          </h2>
        </div>
      </div>
      <div className="row mt-3">{topMovies}</div>
    </div>
  );
}
