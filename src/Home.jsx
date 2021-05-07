import React,{Component} from 'react';
import Acceuil from './pages/Accueil';
import Load  from './components/Loader';
import {useGetData} from './useComponent/UseStateAll';

const Home=()=>{
   
   const [,loading] = useGetData( "https://api.themoviedb.org/3/movie/popular?api_key=c8697268acc5406f1d3c61343bbfd606");
   //console.log(data);
   
    return(
    <div>
        {loading? <Load/>:<Acceuil/>}        
  </div>
    )
}
export default Home;