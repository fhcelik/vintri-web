import * as R from 'ramda';
import Axios from 'axios';
import Promise from 'bluebird';
import {createBrowserHistory} from 'history';
import localforage from 'localforage';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import persistStore from 'redux-persist/lib/persistStore';
import persistReducer from 'redux-persist/lib/persistReducer';
import thunk from 'redux-thunk';
import fsaThunk from './fsa-thunk';
import reducer from './reducers';
import { logout, notification } from '../redux/actions/auth';

export const history = createBrowserHistory();

const httpClient = Axios.create({
  baseURL:'http://localhost:5000',
  withCredentials: true,
});

const middleware = [
  fsaThunk,
  thunk.withExtraArgument(httpClient),
  promiseMiddleware,
  routerMiddleware(history),
];

const reduxPersistConfig = {
  key: 'vintri/root/353',
  timeout: 35000,
  storage: localforage,
  blacklist: [],
};

const persistedReducer = persistReducer(reduxPersistConfig, reducer);

export default function configureStore(initialState = {}, persist = true) {
  let done;
  const isReady = Promise.fromCallback(next => {
    done = next;
  });
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor = persist ? persistStore(store, null, done) : null;

  httpClient.interceptors.response.use(
    response => {
      const status = R.pathOr(null, ['response', 'status'], response);
      if(status == 200) {
        store.dispatch(logout('Ok'));
        store.dispatch(notification(false));
      }
      return response;
    },
    error => {
      const status = R.pathOr(null, ['response', 'status'], error);
      store.dispatch(logout(null));
      store.dispatch(notification(true));
      
      return Promise.reject(error);
    }
  );

  return {
    store,
    isReady,
    persistor,
  };
}