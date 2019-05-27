import {SET_CURRENT_WEATHER, SET_CURRENT_GENDER, SET_CURRENT_BIAS} from './actionTypes';

export const setCurrentWeather = (currentWeahter) => {
    return {
        type: SET_CURRENT_WEATHER,
        currentWeather : currentWeahter,
    };
}

export const setCurrentGender = (currentGender) => {
    return {
        type: SET_CURRENT_GENDER,
        currentGender : currentGender,
    };
}

export const setCurrentBias = (currentBias) => {
    return {
        type: SET_CURRENT_BIAS,
        currentBias : currentBias,
    };
}