import React from "react";
import Listgenre from "../componentShow/ListGenre";
import Listmovie from "../componentShow/ListMovie";
import Auteur from "../componentShow/Auteur";


export default function PageShow() {
  return (
    <div>
     
        <Listgenre/>
        <Listmovie/>
        <Auteur/>

      
    </div>
  );
}
