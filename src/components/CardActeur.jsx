import React from "react";

import modelAuteur from "../image/model_auteur.jpg";

import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";

export default function CardActeur() {
  return (
    <div className="contenaire-card contanaire-image-auteur">
      <div className="card col-sm-4">
        <div className="bg-image">
          <img src={modelAuteur} className="img-fluid img-auteur" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Nom: Film</h5>
          <h5 className="card-title">Anné: Mai 2020</h5>
          <h5 className="card-title">Nombre de film réalisé: Mai 2020</h5>
          <h5 className="card-title">Dernier film anné: Mai 2020</h5>
          <h5 className="card-title">city: Mai 2020</h5>
          <h5 className="card-title">Célibateur:</h5>
          <input type="bton" className="btn btn-primary" value="Retour" />
        </div>
      </div>
    </div>
  );
}
