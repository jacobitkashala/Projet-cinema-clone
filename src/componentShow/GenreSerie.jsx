import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";

export default function GenreSerie({ clickBtngenre }) {
  const urlGenreTv =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US";
  const [genreTv, setGenreTv] = useState([]);

  const restDataSource = new RestDataSource(urlGenreTv);

  useEffect(function () {
    restDataSource.getData((data) => {
      setGenreTv(data);
    });
  }, []);
  let genres = [];

  if (genreTv.genres !== undefined) {
    genres = [...genreTv.genres];
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
