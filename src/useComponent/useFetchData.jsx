import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";

export function useFetchData(dataUrl) {
  const [listMovieGenre, setlistMovieGenre] = useState([]);
  const restDataSource = new RestDataSource(dataUrl);

  useEffect(function () {
    restDataSource.getData((data) => {
      setlistMovieGenre(data);
    });
  }, []);

  if (listMovieGenre !== undefined) {
    return [listMovieGenre,setlistMovieGenre];
  }
}
