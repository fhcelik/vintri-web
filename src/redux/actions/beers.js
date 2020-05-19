import * as R from 'ramda';
import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';

export const searchBeer = createAction(
  '@@vintri/beers/searchBeer',
  value => (dispatch, getState, httpClient) => {
    return httpClient.get('/beers', { params: { q: value } })
      .then(beers => 
        dispatch(beersProps(R.path(['data'],beers)))
      );
  }
);

export const beersProps = createAction(
  '@@vintri/beers/beersProps',
);