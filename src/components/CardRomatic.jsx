import React from "react";
//import Carousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

/*adult: false,
 backdrop_path: "/gnunxHJFZt6BjDdEf9sXXlxveMO.jpg", 
 genre_ids: Array(1), id: 585381, 
 original_language:

*/

export default function CardRomatique({
  backdrop_path,
  title,
  adult,
  poster_path,
}) {
  console.log(backdrop_path, title, adult, poster_path);
  let image = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
        <div>
          <h1>kkkkkdk</h1>
          {/* <div className="carousel-center">
            <img
              src={image}
              alt={movie.title}
            />
          </div> */}
        </div>
      );
}

// <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
