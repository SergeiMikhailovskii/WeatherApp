import { combineReducers } from 'redux';

import fetchingReducer from './fetching_reducer';

const APP_REDUCERS = combineReducers({
  fetchingReducer,
});

export default APP_REDUCERS;
