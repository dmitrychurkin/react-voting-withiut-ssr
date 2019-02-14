import { retry as retrySaga } from 'redux-saga/effects';
import axios from 'axios';


export default function* ({
  retry= Infinity,
  delay= 5000,
  endpoint= '',
  method='get',
  args= []
}) {
  yield retrySaga(retry, delay, (...a) => axios[method](...a), [endpoint, ...args]);
}