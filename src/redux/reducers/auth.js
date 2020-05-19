import { handleActions } from 'redux-actions';
import * as Actions from '../actions/auth';

export default handleActions(
  {
    [Actions.logout]: (auth, { payload: value }) => ({
      user: value
    }),
  },
  {
    user: false,
  }
);