import { createAction } from 'redux-actions';

export const saveQueryEmail = createAction(
  '@@vintri/auth/login',
  email => (dispatch, getState, httpClient) => {
    return httpClient.post('/login', { email });
  }
);

export const logout = createAction(
    '@@vintri/auth/notlogin',
);

export const notification = createAction(
  '@@vintri/auth/notification',
);