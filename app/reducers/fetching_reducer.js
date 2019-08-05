import * as Actions from '../constants/action_types';

const initialState = {
  list: [],
  city: {},
};

const FETCHING_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LIST_RESPONSE:
      return {
        ...state,
        list: action.result,
      };
    case Actions.CITY_RESPONSE:
      return {
        ...state,
        city: action.result,
      };
    default:
      return state;
  }
};

export default FETCHING_REDUCER;
