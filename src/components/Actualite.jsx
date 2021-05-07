import React ,{ useCallback } from "react";
import img3 from "../image/hero1.jpg";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import {useGetData} from '../useComponent/UseStateAll';


export default function Hero() {
  const url="https://api.themoviedb.org/3/movie/popular?api_key=c8697268acc5406f1d3c61343bbfd606";
  const [data,load] = useCallback(useGetData(url),url);
  const firstElement = data.shift(); 
    console.log(load)
   console.log("News");
  //let Element=Array.of(firstElement) backdrop_path,poster_path,release_date,title,original_language
   
  //  const {title} = firstElement;
   
    //console.dir(props);
    return (
  
    <div className="container-fluid">
      <div
        className="p-5 text-center bg-image col-sm-11"
        style={{
          paddingBottom: '10px',
          background: "url(" + `${img3}` + ")  no-repeat",
          height: "100vh",
          width: "97vw",
        }}
      >
        <div className="d-flex row w-25 dflexrow">
          <div className="text-white p-2 col-sm-3">
            <h3 className="mb-2 h3 ">Titre:</h3>
            <h4 className="mb-2">Minute:</h4>
            <h4 className="mb-2">Niveau:</h4>
            <a
              className="btn btn-outline-light btn-sm-5"
              href="#!"
              role="button"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
