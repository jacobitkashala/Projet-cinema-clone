import React, { useState, useEffect, useMemo } from "react";
import { RestDataSource } from "../webservice/RestDataSource";

export default function GenreSerie({ clickBtngenre }) {
  
  let genres = [];
  const urlGenreTv =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US";
  const [genreTv, setGenreTv] = useState([]);

  const restDataSource= useMemo(()=>{
    const restDataSource = new RestDataSource(urlGenreTv);
    return restDataSource;
  },[urlGenreTv]) 

  useEffect(function () {
    restDataSource.getData((data) => {
      setGenreTv(data);
    });
  }, [restDataSource]);
  

  if (genreTv.genres !== undefined) {
    genres = [...genreTv.genres];
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
