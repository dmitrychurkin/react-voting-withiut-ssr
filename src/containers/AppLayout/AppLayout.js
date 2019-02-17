import { connect } from 'react-redux';
import { 
  openAppMenu, 
  closeAppMenu, 
  openAccountMenu,
  closeAccountMenu,
  login 
} from '../../actions';
import { makeGetAppUiState, makeGetAuthState } from '../../selectors';
import AppLayout from '../../components/AppLayout';

const makeMapStateToProps = () => {
  const getAppUiState = makeGetAppUiState();
  const getAuthState = makeGetAuthState();
  return (...args) => {
    return {
      appUiState: getAppUiState(...args),
      authState: getAuthState(...args)
    };
  };
};

export default connect(
  makeMapStateToProps,
  {
    openAppMenu,
    closeAppMenu,
    openAccountMenu,
    closeAccountMenu,
    login
  }
)(AppLayout);

