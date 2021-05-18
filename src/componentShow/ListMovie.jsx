import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noImage from "../image/Inconnue.jpg";
import ReactPaginate from "react-paginate";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function ListMovie({ containsGenreData, isClick }) {
  const [listMovie, setListMovie] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const listMovieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&page=1`;
  const urlImage = "https://image.tmdb.org/t/p/w400/";
  let totalPage = 0;
  const restDataSource = new RestDataSource(listMovieUrl);

  useEffect(function () {
    restDataSource.getData((data) => {
      setListMovie(data);
    });
  }, []);
  console.log(listMovie);

  const displayMovie = (movieData) => {
    let listMovies = [];
    // console.log(movieData);
    if (movieData.results != undefined) {
      const { page, results, total_pages, total_results } = movieData;
      const movies = [...results];
      listMovies = movies.slice(0, 8).map((item, index) => {
        let imageFont =
          item.backdrop_path == null ? noImage : urlImage + item.backdrop_path;
        return (
          <div className="col-md-3 col-sm-6" key={index}>
            <Link exact to={`/movie/${item.id}`}>
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

  const clickLeftMovie = () => {
    // idPage == 1 ? setIdPage(d=>(d*1)) : setIdPage(d=>(d-1));
  };
  const clickRightMovie = () => {
    // idPage == 1 ? setIdPage(d=>(d*1)) : setIdPage(d=>(d-1));
  };

  let popularMovie = displayMovie(listMovie);
  //let movieListGenre = showListMovie(containsGenreData);

  return (
    <div>
      <div className="row mt-3">
        <div className="line">
          <div onClick={clickLeftMovie}>
            <FaArrowCircleLeft className="fa" />
          </div>

          <div onClick={clickRightMovie}>
            <FaArrowCircleRight style={{ color: "#f4c10f" }} className="fa" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <h1>Top movie</h1>
      </div>
      <div className="row mt-3">{popularMovie}</div>
    </div>
  );
}
//{isClick ? movieListGenre : movieList}
