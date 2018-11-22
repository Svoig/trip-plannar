import * as actions from './actionTypes';

function url() {
    return "https://developer.trimet.org/ws/V2/arrivals?locIDs=6849,6850&appID=66B951D96E857D7E9E6883682";
}

export function getArrivalsSuccess(json) {
    return {type: actions.GET_ARRIVALS_SUCCESS, arrivals: json.arrivals};
}

export function getArrivalsError(error) {
    return {type: actions.GET_ARRIVALS_ERROR, error};
}

export function getArrivals() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            return dispatch(getArrivalsSuccess({arrivals: json.resultSet.arrival}));
        })
        .catch(error => {
            return dispatch(getArrivalsError(error));
        });
    }
}