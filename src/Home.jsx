import React,{useState,useContext,Component} from 'react';
import Acceuil from './pages/Accueil';
import Auteur  from './components/CardActeur';
import Load  from './components/Loader';
import {useGetData} from './useComponent/UseStateall';

const Home=()=>{
   
   const data = useGetData( "https://api.themoviedb.org/3/movie/popular?api_key=c8697268acc5406f1d3c61343bbfd606");
   console.log(data);
   
    return(
        <div>
            <Acceuil/>       
        </div>
    )
}
export default Home;