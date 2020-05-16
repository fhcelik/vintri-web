import * as R from 'ramda';
import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';

export const searchBeer = createAction(
  '@@vintri/beers/searchBeer',
  value => (dispatch, getState, httpClient) => {
    return httpClient.get('/beers', { params: { q: value } });
  }
);