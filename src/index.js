import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { isDevelopment, configureStore } from './configureStore';
import rootSaga from './sagas';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';


const store = configureStore();
store.runSaga(rootSaga);

const renderApp = () => 
  render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root')
  );

if (isDevelopment && module.hot) {
  module.hot.accept('./containers/App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
