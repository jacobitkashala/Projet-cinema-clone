import React, { useCallback, useContext } from "react";
import Actualite from "./Actualite";
import CollectionImg from "./MovieRomatic";
import CardList from "./CardList";
import Heroset from "./Heroset";
import { useGetData } from "../useComponent/UseStateAll";

export default function News() {
  return (
    <div>
      <Actualite />
      <h2 className={{ color: "#fff" }}>Action </h2>
      <CardList />
      <h2> Romatique</h2>
      <CollectionImg />
      <Heroset />
    </div>
  );
}
