import * as R from 'ramda';
import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';


export const saveRating = createAction(
  '@@vintri/beers/saveRating',
  rating => (dispatch, getState, httpClient) => {
    console.log(rating)
    return httpClient.post('/rating', { rating });
  }
);