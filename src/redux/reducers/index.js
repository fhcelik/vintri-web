import { combineReducers } from 'redux';
import auth from './auth';
import beers from './beers';

export default combineReducers({
  auth,
  beers
});