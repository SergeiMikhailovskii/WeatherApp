import * as Actions from '../constants/action_types';

const initialState = {
  list: [],
  isLoading: false,
};

const FETCHING_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LIST_RESPONSE:
      return {
        ...state,
        list: action.result,
        isLoading: true,
      };
    case Actions.CITY_RESPONSE:
      return {
        ...state,
        list: action.result,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default FETCHING_REDUCER;
