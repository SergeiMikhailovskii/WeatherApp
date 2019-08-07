import * as Actions from '../constants/action_types';

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
};

const FETCHING_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LIST_RESPONSE_REQUEST:
      return {
        ...state,
        // list: action.result,
        isLoading: true,
        isError: false,
      };
    case Actions.LIST_RESPONSE_SUCCESS:
      return {
        ...state,
        list: action.result,
        isLoading: false,
        isError: false,
      };
    case Actions.LIST_RESPONSE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.CITY_RESPONSE:
      return {
        ...state,
        list: [action.result],
        isLoading: true,
        isError: false,
      };
    default:
      return state;
  }
};

export default FETCHING_REDUCER;
