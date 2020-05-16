import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { saveQueryEmail } from '../../redux/actions/auth';
import Login from './Login.view';

export default compose(
  connect(null, {
    saveQueryEmail,
  }),
  withHandlers({
      handleChange: ({saveQueryEmail}) => ({ target: { value } }) => {
        saveQueryEmail(value);
      },
  })
)(Login);