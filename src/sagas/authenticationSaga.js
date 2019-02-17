import { takeEvery, call, cps, put, take, select, all } from 'redux-saga/effects';
import Cookie from 'js-cookie';
import * as authTypes from '../actionTypes/authentication';
import * as authActions from '../actions/authentication';
import { history } from '../components/App';
import auth0 from '../Auth';
import { makeGetAuthState } from '../selectors';

export default [
  function* handleAuthenticationWatcherSaga() {

    yield take(authTypes.HANDLE_AUTHENTICATION);

    try {
      const auth0Payload = yield cps([ auth0, 'parseHash' ]);
      console.log('handleAuthenticationWatcherSaga auth0Payload ', auth0Payload);
      // userProfile: null,
      // isAuthenticated: false,
      // accessToken: null,
      // idToken: null, 
      // expiresAt: 0,
      // error: null,
      // intentedRoute: ''
      const { accessToken, idToken, expiresIn } = auth0Payload;
      const userProfile = yield cps([ auth0.client, 'userInfo' ], accessToken);
      console.log('handleAuthenticationWatcherSaga userProfile ', userProfile);
      yield put(authActions.success({ userProfile, accessToken, idToken, expiresIn }));

      const { intentedRoute } = yield select(makeGetAuthState());
      
      yield all([
        call([ Cookie, 'set' ], 'jwt', accessToken, { expires: expiresIn }),
        call([ history, 'replace' ], intentedRoute || '/account')
      ]);

    }catch(err) {
      console.log('ERROR handleAuthenticationWatcherSaga ', err);
      yield put(authActions.error(err));
      yield call([ history, 'replace' ], '/');
    }

  },
  function* loginWatcherSaga() {
    yield take(authTypes.LOGIN);
    yield call([ auth0, 'authorize' ]);
  },
  function* checkSessionWatcherSaga() {
    yield takeEvery(authTypes.CHECK_SESSION, function* () {
      try {

        const auth0Payload = yield cps([ auth0, 'checkSession' ], {});

        console.log('session result ', auth0Payload);
        const { accessToken, idToken, expiresIn } = auth0Payload;

        const userProfile = yield cps([ auth0.client, 'userInfo' ], accessToken);

        console.log('handleAuthenticationWatcherSaga userProfile ', userProfile);
        yield put(authActions.success({ userProfile, accessToken, idToken, expiresIn }));

        yield call([ Cookie, 'set' ], 'jwt', accessToken, { expires: expiresIn });

      }catch(err) {

        console.log('ERROR checkSessionWatcher ', err);
        yield put(authActions.error(err));
        yield put(authActions.logout());

      }
    });
  }
];
