import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
// import PageShowDetail from './pages/PageShowDetail'
// import PageResultat from './pages/pageResultat'
// import Serie from './pages/pageSerie'
// import Loader from './Loader'

const Home = () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/movie/:id" component={PageShowDetail} />
        <Route path="/Serie/" component={Serie} />
        <Route path="/resulat/" component={PageResultat} /> */}
      </Switch>
    </main>
  )
}
export default Home
