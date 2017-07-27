import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import inTheaters from './inTheaters';

export default combineReducers({
  router,
  inTheaters
});
