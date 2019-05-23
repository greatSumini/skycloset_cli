import {SET_LOCATION, SET_ADDRESS} from './actionTypes';

export const setLocation = (location) => {
    return {
        type: SET_LOCATION,
        location : location,
    };
}

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        address: address,
    };
}