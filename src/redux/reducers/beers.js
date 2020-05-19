import { handleActions } from 'redux-actions';
import * as Actions from '../actions/beers';

export default handleActions(
  {
    [Actions.beersProps]: (beers, { payload }) => ({
      beers: payload
    }),
  },
  {
    beers: [{ id:"", name:"", description:"", first_brewed:"", food_pairings:"" }],
  }
);