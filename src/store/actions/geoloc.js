import {SET_LATITUDE, SET_LONGITUDE, SET_ADDRESS, SET_TM_X, SET_TM_Y} from './actionTypes';

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

export const setTmX = (tm_x) => {
    return {
        type: SET_TM_X,
        tm_x : tm_x,
    };
}

export const setTmY = (tm_y) => {
    return {
        type: SET_TM_Y,
        tm_y : tm_y,
    };
}