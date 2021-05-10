import React, { useEffect, useState } from "react";
import { RestDataSource } from "../reportWebVitals/RestDataSource";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function SlideHero() {
  const [play, setplay] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US&page=1";
  
    const restDataSource = new RestDataSource(url);

  useEffect(function () {
    restDataSource.getData((data) => {
      setplay(data);
    });
  }, []);

  if (play.results !== undefined) {
    var { page, results, total_pages, total_results } = play;
    var movies = play.results.slice(0, 7);
    //backdrop_path

    console.log(movies);
    var nowPlays = movies.map((item, index) => (
      <div key={index} style={{ height: 500, width: "100%" }}>
        <div className="carousel-center">
          <img
            style={{ height: 600 }}
            src={urlIamage + item.poster_path}
            alt={item.title}
          />
        </div>
      </div>
    ));
  }


  return <div>
      <div className="contenaire">
        <div className="row">
          <div className="col">
            <RBCarousel
              className="carousel-fade"
              autoplay={true}
              pauseOnVisibility={true}
              slideshowSpeed={5000}
              version={4}
              indicators={false}
            >
              {nowPlays}
            </RBCarousel>
          </div>
        </div>
      </div>
  </div>;
}
