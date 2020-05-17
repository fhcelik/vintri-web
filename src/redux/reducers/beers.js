import { handleActions } from 'redux-actions';
import * as Actions from '../actions/beers';

export default handleActions(
  {
    [Actions.beersProps]: (beers, { payload }) => {console.log(payload); return({
      beers: payload
    })},
  },
  {
    beers: [],
  }
);