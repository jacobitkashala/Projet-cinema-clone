import React, { useEffect, useState } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import 'react-bootstrap';
import PageShow from "./pages/PageShow";
import PagePageShowDetail from "./pages/PagePageShowDetail";

const Home = () => {
  

  return (
    <main> 
      
        {/* <contexDateMoviePopular.Provider value={movieTop}>
        </contexDateMoviePopular.Provider> */}
         <Switch>
           <Route path="/" component={PageShow} />
           <Route path="/movie/:id" component={PagePageShowDetail} />
         </Switch>
  
  

    </main>
  );
};
export default Home;
