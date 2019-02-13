import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const isDevelopment = process.env.NODE_ENV !== 'production';

export function configureStore(preloadedState) {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    preloadedState,
    isDevelopment ? composeWithDevTools(...enhancers) : compose(...enhancers)
  );
  
  sagaMiddleware.run(rootSaga);

  if (isDevelopment && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}