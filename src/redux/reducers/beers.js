import { handleActions } from 'redux-actions';
import * as Actions from '../actions/beers';
import * as R from 'ramda';

export default handleActions(
  {
    [Actions.beersProps]: (beers, { payload }) => ({
      ...beers,
      beers: payload,
      ids: R.map( obj => R.prop(['id'], obj), payload)
    }),
  },
  {
    beers: [],
  }
);