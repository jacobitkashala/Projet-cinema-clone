import React, { useEffect, useState } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import RBCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function CarouselHero() {
  const [dataMovie, setDatamovie] = useState([]);
  const urlData =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&page=1";

  const restDataSource = new RestDataSource(urlData);
  const urlImage = "https://image.tmdb.org/t/p/w400/";

  useEffect(function () {
    restDataSource.getData(data => {
      setDatamovie(data);
    });
  }, []);
  console.log(dataMovie)

  if (dataMovie.results !== undefined) {
    var { page, results, total_pages, total_results } = dataMovie;
    var movies = results.slice(0, 7);
    //backdrop_path

    var nowPlays = movies.map((item, index) => {
      return (
        <div key={index} style={{ height: 500, width: "100%" }}>
          <div className="carousel-center">
            <img
              style={{ height: 600 }}
              src={urlImage + item.poster_path}
              alt={item.title}
            />
          </div>
        </div>
      );
    });
  }
  console.log(nowPlays)

  return (
    <div>
      <div className="contenaire">
        <div className="row">
          <div className="col">
            <h1>carouselll</h1>
            {/* <RBCarousel
              className="carousel-fade"
              autoplay={true}
              pauseOnVisibility={true}
              slideshowSpeed={5000}
              version={4}
              indicators={false}
            >
              <h1>hhjj</h1>
            </RBCarousel> */}
          </div>
        </div>
      </div>
    </div>
  );
}
