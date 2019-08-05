import * as Actions from '../constants/action_types';

function fetchListOfCities() {
  return fetch(`${Actions.BASE_URL}/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=8df903ce56f6d18245e72f380beb297d`);
}

export const listOfCitiesRequest = () => function (dispatch) {
  return fetchListOfCities()
    .then(list => list.json())
    .then((list) => {
      dispatch(getListOfCities(list));
    }).catch((error) => {
      console.log(error);
    });
};

export const getListOfCities = result => ({
  type: Actions.LIST_RESPONSE,
  result,
});
