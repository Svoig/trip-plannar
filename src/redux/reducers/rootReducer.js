import {combineReducers} from 'redux';
import arrivals from './arrivalReducer';
import location from './locationReducer';

const rootReducer = combineReducers({
    arrivals,
    location,
});

export default rootReducer;