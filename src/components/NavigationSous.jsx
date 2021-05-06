import React, { Component } from "react";
import Video from "./Video";
import Menuenf from "./Menuenf"
import Navigation from "./Navigation"

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationSous() {
  return (
            <BrowserRouter forceRefresh={true}>       
              <Menuenf/>Comic
             
                <Route exact path="/Video" component={Video}/>
                <Route exact path="/Serie" component={Video}/>
                <Route exact path="/Comic" component={Video}/>
                <Route exact path="/Film" component={Video}/>
                <Route exact path="/Action" component={Video}/>
                {/* <Route  exact path="/Personnge" component={Collection}  />        */}
                {/* <Route  path="/" component={ErrorPage} /> */}
             
            </BrowserRouter>
  );
}

export default NavigationSous;
