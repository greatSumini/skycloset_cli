import {SET_LATITUDE, SET_LONGITUDE, SET_ADDRESS} from './actionTypes';

export const setLatitude = (latitude) => {
    return {
        type: SET_LATITUDE,
        latitude : latitude,
    };
}

export const setLongitude = (longitude) => {
    return {
        type: SET_LONGITUDE,
        longitude : longitude,
    };
}

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        address: address,
    };
}