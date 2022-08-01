import React, { useState, useEffect, useMemo } from "react";
import { RestDataSource } from "../webservice/RestDataSource";

export default function ListGenre({ clickBtngenre }) {
  const genreUrl =
   `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US`;

  const [genreMovie, setGenreMovie] = useState([]);

 const restDataSource=useMemo(()=>{
  const restDataSource = new RestDataSource(genreUrl);
  return restDataSource
 },[genreUrl])   

  useEffect(function () {
    restDataSource.getData((data) => {
      setGenreMovie(data);
    });
  }, [restDataSource]);
  let genres = [];

  if (genreMovie.genres !== undefined) {
    genres = [...genreMovie.genres];
  }

  return (
    <div className="container">
      <div className="row mt-3">
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
