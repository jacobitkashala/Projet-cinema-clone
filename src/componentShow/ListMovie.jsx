import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function ListMovie({ containsGenreData, isClick }) {
  const listMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

  const urlImage = "https://image.tmdb.org/t/p/w400/";

  const [listMovie, setListMovie] = useState([]);
  let pageCurrent = listMovie.page;
  //console.log(listMovie);

  const restDataSource = new RestDataSource(listMovieUrl);

  const showListMovie = (containsData) => {
    let listMovies = [];
    if (containsData.results != undefined) {
      const { page, results, total_pages, total_results } = containsGenreData;
      const movies = [...results];

      listMovies = movies.slice(0, 8).map((item, index) => {
        return (
          <div className="col-md-3 col-sm-6" key={index}>
            <Link exact to={`/movie/${item.id}`}>
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
                activeColor="#f4c10f"
                color="#f4c10f"
                style={{color:"#f4c10f"}}

              ></ReactStars>
            </div>
          </div>
        );
      });
    }
    return listMovies;
  };

  const clickLeftMovie = () => {
    // pageCurrent == 1 ? setListMovie(d=>(d.page)) : setListMovie(d=>(d.page=d.page-1));
    // console.log(listMovie);
  };
  const clickRightMovie = () => {
    // pageCurrent == 400 ? setListMovie(d=>(d.page)) : setListMovie(d=>(d.page=d.page+1));
    // console.dir(listMovie);
    // movieListGenre =showListMovie(containsGenreData);
  };

  useEffect(function () {
    restDataSource.getData((data) => {
      setListMovie(data);
    });
  }, []);

  let movieList = [];
  let movieListGenre = showListMovie(containsGenreData);
  if (listMovie.results !== undefined) {
    const { page, results, total_pages, total_results } = listMovie;
    const movies = [...results];
    //console.log(results);
    movieList = movies.slice(0, 8).map((item, index) => {
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
              activeColor="#f4c10f"
              // color={"#f4c10f"}
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
            <div onClick={clickLeftMovie}>
              <FaArrowCircleLeft className="fa" />
            </div>
            <div onClick={clickRightMovie}>
              <FaArrowCircleRight style={{ color: "#f4c10f" }} className="fa" />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">{isClick ? movieListGenre : movieList}</div>
    </div>
  );
}
// {isClick ? movieList : containsGenreMovies}
