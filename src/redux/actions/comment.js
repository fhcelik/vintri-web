import * as R from 'ramda';
import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';

export const saveComment = createAction(
    '@@vintri/comment/saveComment',
    comment => (dispatch, getState, httpClient) => {
      return httpClient.post('/login', { comment });
    }
);

export const saveRating = createAction(
    '@@vintri/rating/saveRating',
    rating => (dispatch, getState, httpClient) => {
      return httpClient.post('/login', { rating });
    }
);