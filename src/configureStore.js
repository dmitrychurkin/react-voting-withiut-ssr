import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export const isDevelopment = process.env.NODE_ENV !== 'production';

export function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    initialState,
    isDevelopment ? composeWithDevTools(...enhancers) : compose(...enhancers)
  );

  if (isDevelopment && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return {
    ...store,
    runSaga: sagaMiddleware.run
  };
}