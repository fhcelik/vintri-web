import { createAction } from 'redux-actions';

export const saveRating = createAction(
  '@@vintri/beers/saveRating',
  rating => (dispatch, getState, httpClient) => {
    return httpClient.post(`/rating/${rating.id}`, { ...rating });
  }
);