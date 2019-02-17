import { connect } from 'react-redux';
import App from '../../components/App';
import { checkSession } from '../../actions/authentication';

export default connect(null, {
  checkSession
})(App);