import * as actions from "./actionTypes";

function locateUser() {
  const result = new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(val => {
        console.log(`AWOOOOGA!!! ${val}`);
        debugger;
        return resolve(val);
      });
    } else {
      return reject(new Error("Geolocation unavailable"));
    }
  });

  return result;
}

export function getLocation() {
  return dispatch => {
    dispatch({ type: actions.GET_LOCATION });

    locateUser()
      .then(val => {
        if (val) {
          dispatch(getLocationSuccess(val));
        }
      })
      .catch(e => {
        throw new Error("Location is undefined");
      });
  };
}

export function getLocationError(error) {
  console.error(`GetLocationError: ${error.message}`);
  return { type: actions.GET_LOCATION_ERROR, error };
}

export function getLocationSuccess(location) {
  console.log(`GetLocationSuccess! Location: ${location}`);
  return {
    type: actions.GET_LOCATION_SUCCESS,
    location: location ? location : null
  };
}
