import { retry } from 'redux-saga';

export default function* ({
  retry= Infinity,
  delay= 5000,
  endpoint= '',
  args= []
}) {
  yield retry(retry, delay, /* axios ,*/ [endpoint, ...args]);
}