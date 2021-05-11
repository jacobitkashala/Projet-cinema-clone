import React, { useEffect, useState } from "react";
import Listgenre from "../componentShow/ListGenre";
import { Link } from "react-router-dom";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactStars from "react-rating-stars-component";
import Listmovie from "../componentShow/ListMovie";
import Auteur from "../componentShow/Auteur";
import ListMovieTop from "../componentShow/ListMovieTOp";
import { useFetchData } from "../useComponent/useFetchData";

export default function PageShow() {
  const [id, setId] = useState("");
  const [containsGenreData, setContainsGenreData] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const movieGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${id}&=&with_watch_monetization_types=flatrate`;

  const restDataSource = new RestDataSource(movieGenreUrl);
  console.log(containsGenreData);
  useEffect(() => {
    restDataSource.getData((data) => {
      setContainsGenreData(data);
    });
  }, [id]);

  const clickBtngenre = (id) => {
    setIsClick(true);
    setId(id);
    const urlImage = `https://image.tmdb.org/t/p/w400/`;

    // if (containsGenreData.results !== undefined) {
    //   const { page, results, total_pages, total_results } = containsGenreData;
    //   const movies = [...results];

    //   containsGenreMovies = movies.slice(0, 4).map((item, index) => {
    //     return (
    //       <div className="col-md-3 col-sm-6" key={index}>
    //         <div className="card"></div>
    //         <Link to={`/movie/${item.id}`}>
    //           <img
    //             className="img-fluid"
    //             src={urlImage + item.poster_path}
    //             alt={item.title}
    //           />
    //         </Link>
    //         <div className="mt-3">
    //           <h5 style={{ fontWeight: "border" }}>{item.title} </h5>
    //           <p> {item.vote_average}</p>
    //           <ReactStars
    //             count={item.vote_average}
    //             size={20}
    //             activeColor="#f4c10f"
    //             // color={"#f4c10f"}
    //           ></ReactStars>
    //         </div>
    //       </div>
    //     );
    //   });
    //   //
    // }
  };
  return (
    <div>
      <Listgenre clickBtngenre={clickBtngenre} />
      <Listmovie containsGenreData={containsGenreData} isClick={isClick} />
      <Auteur />
      <ListMovieTop />
    </div>
  );
}
