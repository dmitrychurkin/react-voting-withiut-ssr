import React from 'react';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createHistory from 'history/createBrowserHistory';
import Account from '../Account';
import Home from '../Home';
import Callback from '../Callback';
import Auth from "../../Auth/Auth";
import AppLayout from '../../containers/AppLayout';

export const history = createHistory();

const auth = new Auth();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App = () => {

  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout>
          <Route path="/" render={props => <Home auth={auth} {...props} />} />
          <Route path="/account" render={props => <Account auth={auth} {...props} />} />
          <Route path="/callback" render={props => {
            if (/access_token|id_token|error/.test(props.location.hash)) {
              auth.handleAuthentication();
            }
            return <Callback {...props} /> 
          }}/>
        </AppLayout>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
