import { createAction } from 'redux-actions';

export const saveQueryEmail = createAction(
  '@@vintri/auth/login',
  user => (dispatch, getState, httpClient) => {
    return httpClient.put('/login', { user }, {headers: { 'x-user': user }});
  }
);

export const logout = createAction(
  '@@vintri/auth/logout',
);

