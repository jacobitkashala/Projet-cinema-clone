import React, { useState, useEffect, useMemo } from "react";
// import dotEnv form "do";
import { Link } from "react-router-dom";
import noImage from "../image/Inconnue.jpg";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function ListMovie({ containsGenreData, isClick }) {

  const [listMovie, setListMovie] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const listMovieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US&page=${pageNumber}`;
  const urlImage = "https://image.tmdb.org/t/p/w400/";
  let totalPage = 0;

  //console.log(process.env.REACT_APP_AMOVIE_API_KEY);
  const restDataSource = useMemo(() => {
    const restDataSource = new RestDataSource(listMovieUrl);
    return restDataSource;
  }, [listMovieUrl])


  useEffect(
    function () {
      restDataSource.getData((data) => {
        setListMovie(data);
      });
    },
    [restDataSource]
  );

  const displayMovie = (movieData) => {
    let listMovies = [];

    if (movieData.results !== undefined) {
      const { results, total_pages } = movieData;
      totalPage = total_pages;
      const movies = [...results];
      listMovies = movies.slice(0, 12).map((item, index) => {
        let imageFont =
          item.backdrop_path == null ? noImage : urlImage + item.backdrop_path;
        return (
          <div className="col-md-3 col-sm-6" key={index}>
            <Link to={`/movie/${item.id}`}>
              <img className="img-fluid" src={imageFont} alt={item.title} />
            </Link>
            <div className="mt-3">
              <h5 style={{ fontWeight: "border" }}>{item.title} </h5>
              <p> {item.vote_average}</p>
              <ReactStars
                count={item.vote_average}
                size={20}
                activeColor="#f4c10f"
                color="#f4c10f"
                style={{ color: "#f4c10f" }}
              ></ReactStars>
            </div>
          </div>
        );
      });
    }
    return listMovies;
  };

  const clickPreviousMovie = () => {
    pageNumber === 1
      ? setpageNumber((pageCurrent) => pageCurrent * 1)
      : setpageNumber((pageCurrent) => pageCurrent - 1);
  };
  const clickNextMovie = () => {
    pageNumber === 47
      ? setpageNumber((pageCurrent) => pageCurrent * 1)
      : setpageNumber((pageCurrent) => pageCurrent + 1);
  };

  let popularMovie = isClick
    ? displayMovie(containsGenreData)
    : displayMovie(listMovie);

  return (
    <div>
      <div className="row mt-3">
        <div className="line">
          <div onClick={clickPreviousMovie}>
            <FaArrowCircleLeft className="fa" />
          </div>
          <div className="paginateindice">
            {pageNumber}/{totalPage}
          </div>
          <div onClick={clickNextMovie}>
            <FaArrowCircleRight style={{ color: "#f4c10f" }} className="fa" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <h1 style={{ color: "#5a606b" }}>Film mieux c??t??</h1>
      </div>
      <div className="row mt-3">{popularMovie}</div>
    </div>
  );
}
//{isClick ? movieListGenre : movieList}
