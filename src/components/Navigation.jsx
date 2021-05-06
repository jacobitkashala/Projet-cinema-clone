import React, { Component } from "react";
import Menu from './Menu';
import ErrorPage from './ErrorPage';
import Collection from './Collection';
import News from './News';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
            <BrowserRouter forceRefresh={true}>       
              <Menu/>
              <Switch>
                <Route exact path="/" component={News}/>
                <Route  exact path="/Collection" component={Collection}  />       
                <Route  path="/" component={ErrorPage} />
              </Switch>
            </BrowserRouter>
  );
}

export default Navigation;
