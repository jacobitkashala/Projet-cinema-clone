import React from "react";
import { Route, Switch } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PageShow from "./pages/PageShow";
import PageShowDetail from "./pages/PageShowDetail";
import PageResultat from "./pages/pageResultat";
import Serie from "./pages/pageSerie";
const Home = () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={PageShow} />
        <Route path="/movie/:id" component={PageShowDetail} />
        <Route path="/Serie/" component={Serie} />
        <Route path="/resulat/" component={PageResultat} />
      </Switch>
    </main>
  );
};
export default Home;
