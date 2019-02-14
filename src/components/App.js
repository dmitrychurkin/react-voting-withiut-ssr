import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Account from './Account';
import Home from './Home';
import Callback from './Callback';
import Auth from "../Auth/Auth";

export const history = createHistory();

const auth = new Auth();

const App = () => {

  return (
    <Router history={history}>
      <div>
        <Route path="/" render={props => <Home auth={auth} {...props} />} />
        <Route path="/home" render={props => <Account auth={auth} {...props} />} />
        <Route path="/callback" render={props => {
          if (/access_token|id_token|error/.test(props.location.hash)) {
            //auth.handleAuthentication();
          }
          return <Callback {...props} /> 
        }}/>
      </div>
    </Router>
  );
}

export default App;
