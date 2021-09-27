import React from "react";
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
            ZenderCiné est un produit de SmartConcept, qui vous offre la
            possibilté de voir les extraits de film
          </p>
        </div>
        <div
          className="col-md-3 col-sm-4 presentation"
          style={{ color: "#5a606b" }}
        >
          <h2>A propos</h2>
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
            susceptibles,Promis
          </p>
        </div>
      </div>
    </div>
  );
}
