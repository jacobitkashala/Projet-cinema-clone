import React, { useState } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import HomePage from './pages/PageShow'
// import PageShowDetail from './pages/PageShowDetail'
// import PageResultat from './pages/pageResultat'
// import Serie from './pages/pageSerie'
// import Loader from './Loader'

import { useMachine } from '@xstate/react'
import {promiseMachine} from './xState'

const Home = () => {
  // const [load, setLoad] = useState(true)
  const [state, send] = useMachine(promiseMachine);
  // setTimeout(() => {
  //   setLoad((b) => false);
  // }, 4000);
  // console.log()
  return (
    // <div>
    //   {load ? (
    //     <Loader />
    //   ) : (
    //     <main className="container">
    //       <Switch>
    //         <Route exact path="/" component={HomePage} />
    //         <Route path="/movie/:id" component={PageShowDetail} />
    //         <Route path="/Serie/" component={Serie} />
    //         <Route path="/resulat/" component={PageResultat} />
    //       </Switch>
    //     </main>
    //   )}
    // </div>
    <div>
      {state.matches('pending') && <p>Loading...</p>}
      {state.matches('rejected') && <p>Promise Rejected</p>}
      {state.matches('resolved') && <p>Promise Resolved</p>}
      <div> 
        <button onClick={() => send('RESOLVE')}>Resolve</button>
        <button onClick={() => send('REJECT')}>Reject</button>
      </div>
    </div>
  )
}
export default Home
