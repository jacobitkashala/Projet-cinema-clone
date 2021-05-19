import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function footer() {
  return (
    <div>
      <hr className="mt-5" style={{ borderTop: " 2px solide #5a606b" }}></hr>
      <div className="row mt-3">
        <div
          className="col-md-3 col-sm-4 presentation"
          style={{ color: "#5a606b" }}
        >
          <h2>
            Bienvenue Chez Zender<span className="suffixe">Ciné</span>
          </h2>
          <p>
            ZenderCiné est un produit de ZenderConcept, qui vous offre la
            possibilté de voir les extraits de film
          </p>
        </div>
        <div
          className="col-md-3 col-sm-4 presentation"
          style={{ color: "#5a606b" }}
        >
          <h2>Nous RENCONTRER</h2>
          <ul className="list-inline">
            <li className="">
              <Link href="/" style={{ color: "#f4c10f" }}>
                <span className="porto"> Recruteurs</span>
              </Link>
            </li>
            <li className="">
              <Link to="/">
                <span className="porto">Presse</span>
              </Link>
            </li>
            <li className="">
              <Link to="/" style={{ color: "#f4c10f" }}>
                <span className="porto"> Jobs</span>
              </Link>
            </li>
            <li className="">
              <Link to="/" style={{ color: "#f4c10f" }}>
                <span className="porto">Contact </span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="col-md-3 col-sm-4 presentation"
          style={{ color: "#5a606b" }}
        >
          <h2>A propos</h2>
          <Link>
            {" "}
            <span className="porto">Nos réalisations </span>{" "}
          </Link>
          <Link>
            <span className="porto">Qui sommes-nous? </span>{" "}
          </Link>
        </div>
        <div className="col-md-3 col-sm-4" style={{ color: "#5a606b" }}>
          <p>Rester informer de tout ce que nous réalisons</p>
          <div className="form-outline form-white mb-4">
            <input
              className="form-control me-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <p>
            Vous pouvez vous désabonner à tout moment.on n'est pas
            susceptibles,Promis{" "}
          </p>
        </div>
      </div>
      <hr className="mt-5" style={{ borderTop: " 2px solide #5a606b" }}></hr>

      <div className="row mt-3">
        <div className="col-sm-6">
          <h2>NOS PRODUITS </h2>
        </div>
        <div className="col-sm-6 ">
          Suivez-nous :
          <div className="row mt-3">
            <div>
              <FaFacebookSquare /> : JacobitKashala
            </div>
            <div>
              <FaWhatsappSquare /> : +243815824641
            </div>
            <div>
              <FaGithubSquare /> : JacobitKashala
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
