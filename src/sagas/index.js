import { spawn, call } from 'redux-saga/effects';
import authSagas from './authenticationSaga';

export default function* () {

  const appSagas = [
    ...authSagas
  ];

  yield* appSagas.map(function* (saga) {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log('Crush in root saga');
          console.log(e);
        }
      }
    });
  });

};