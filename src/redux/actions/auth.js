import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

export const saveQueryEmail = createAction(
  '@@vintri/auth/login',
  user => (dispatch, getState, httpClient) => {
    return httpClient.put('/login', { user }, {headers: { 'x-user': user }});
  }
);

export const logout = createAction(
  '@@vintri/auth/logout',
);

