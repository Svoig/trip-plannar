import * as actions from './actionTypes';

function url() {
    return "https://developer.trimet.org/ws/V2/arrivals?locIDs=6849,6850&appID=66B951D96E857D7E9E6883682";
}

export function getStuffSuccess(json) {
    return {type: actions.GET_STUFF_SUCCESS, stuff: json.stuff};
}

export function getStuffError(error) {
    return {type: actions.GET_STUFF_ERROR, error};
}

export function getStuff() {
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
            return dispatch(getStuffSuccess({stuff: json.resultSet.arrival}));
        })
        .catch(error => {
            return dispatch(getStuffError(error));
        });
    }
}