import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import ReactPaginate from "react-paginate";

export default function ListGenre({ clickBtngenre }) {
  const genreUrl =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US";

  const [genreMovie, setGenreMovie] = useState([]);

  const restDataSource = new RestDataSource(genreUrl);

  useEffect(function () {
    restDataSource.getData((data) => {
      setGenreMovie(data);
    });
  }, []);
  let genres = [];

  if (genreMovie.genres !== undefined) {
    genres = [...genreMovie.genres];
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <h1></h1>
        <div className="col">
          <div className="list-inline-item">
            <div>
              {genres.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    clickBtngenre(item.id); //diplayMoviesWithGenre
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
