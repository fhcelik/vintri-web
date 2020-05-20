import * as R from 'ramda';
import { handleActions } from 'redux-actions';
import * as Actions from '../actions/beers';

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