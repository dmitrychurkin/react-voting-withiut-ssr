import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createHistory from 'history/createBrowserHistory';
import Account from '../Account';
import Home from '../Home';
import Callback from '../Callback';
import AppLayout from '../../containers/AppLayout';

// import auth0 from '../../Auth';

export const history = createHistory();


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App = props => {

  console.log('App', props);
  useEffect(() => {
    props.checkSession();
    // auth0.checkSession({}, (err, result) => {
    //   console.log(err, result);
    // });
  });

  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout>
          <Route path="/" render={props => <Home {...props} />} />
          <Route path="/account" render={props => <Account {...props} />} />
          <Route path="/callback" render={props => {
            if (/access_token|id_token|error/.test(props.location.hash)) {
              //auth.handleAuthentication();
            }
            return <Callback {...props} /> 
          }}/>
        </AppLayout>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
