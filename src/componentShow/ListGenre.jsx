import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";

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

    //const listMovie = genres.slice(0, 4).map((item, index) => {
    //       return (
    //         <div className="col-md-3 col-sm-6" key={index}>
    //           <div className="card" >
    //               <Link to={`/movie/${item.id} `}>
    //                   <img src={item.} alt=""/>
    //               </Link>
    //           </div>
    //         </div>
    //       );
    //     });
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
                    clickBtngenre(item.id);
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
