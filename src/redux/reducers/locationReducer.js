import initialState from "./initialState";
import {
  GET_LOCATION,
  GET_LOCATION_ERROR,
  GET_LOCATION_SUCCESS
} from "../actions/actionTypes";

export default function location(state = initialState.location, action) {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      return action.location;
    default:
      return state;
  }
}
