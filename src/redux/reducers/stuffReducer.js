import initialState from './initilState';
import {GET_STUFF, GET_STUFF_ERROR, GET_STUFF_SUCCESS} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
    switch (action.type) {
        case GET_STUFF_SUCCESS:
            return action.stuff;
        default:
            return state;
    }
}