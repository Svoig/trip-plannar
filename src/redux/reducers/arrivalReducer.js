import initialState from "./initialState";
import {
  GET_ARRIVALS,
  GET_ARRIVALS_ERROR,
  GET_ARRIVALS_SUCCESS
} from "../actions/actionTypes";

export default function arrivals(state = initialState.arrivals, action) {
  switch (action.type) {
    case GET_ARRIVALS_SUCCESS:
      return action.arrivals;
    default:
      return state;
  }
}
