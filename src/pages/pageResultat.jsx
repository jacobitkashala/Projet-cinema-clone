import React from "react";
import ReactStars from "react-rating-stars-component";
import Footer from "../componentShow/Footer";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import noImage from "../image/Inconnue.jpg";
// import { RestDataSource } from "../webservice/RestDataSource";

export default function PageResultat() {
  let dataResearch = useLocation();
 // const [idMovie, setIdMovie] = useState(1);
  const urlImage = "https://image.tmdb.org/t/p/w400/";
  //let totalPage = 1;
  const displayMovie = (movieData) => {
    let listMovies = [];

    if (movieData.results !== undefined) {
      const { results, total_pages } = movieData;
     // totalPage = total_pages;
      const movies = [...results];
      listMovies = movies.map((item, index) => {
        let imageFont =
          item.backdrop_path == null ? noImage : urlImage + item.backdrop_path;
        return (
          <div className="col-md-3 col-sm-6" key={index}>
            <Link exact to={`/movie/${item.id}`}>
              <img className="img-fluid" src={imageFont} alt={item.title} />
            </Link>
            <div className="mt-3">
              <h5 style={{ fontWeight: "border" }}>{item.title} </h5>
              <p> {item.vote_average}</p>
              <ReactStars
                count={item.vote_average}
                size={20}
                activeColor="#f4c10f"
                color="#f4c10f"
                style={{ color: "#f4c10f" }}
              ></ReactStars>
            </div>
          </div>
        );
      });
    }
    return listMovies;
  };
  console.log(dataResearch.state.dataReseach);
  //console.log(data);
  let Resultat = displayMovie(dataResearch.state.dataReseach);
  return (
    <div className="container">
      <div className="row mt-3">
        <Link exact to={"/"}>
          <FaArrowCircleLeft className="fa" />
        </Link>
      </div>
      {/* <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div> */}
      <div className="row mt-3">
          { Resultat} 
      </div>
     
      <div className="row mt-3">
        <Footer />
      </div>
    </div>
  );
}
