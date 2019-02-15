import { connect } from 'react-redux';
import { openAppMenu, closeAppMenu } from '../../actions';
import { makeGetAppMenuState } from '../../selectors';
import AppLayout from '../../components/AppLayout';

const makeMapStateToProps = () => {
  const getAppMenuState = makeGetAppMenuState();
  return state => {
    return {
      appMenuState: getAppMenuState(state)
    };
  };
};

export default connect(
  makeMapStateToProps,
  {
    openAppMenu,
    closeAppMenu
  }
)(AppLayout);

