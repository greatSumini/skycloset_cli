import {SET_WEATHER0, SET_WEATHER1, SET_WEATHER2, SET_WEATHER3} from './actionTypes';

export const setWeather0 = (weather) => {
    return {
        type : SET_WEATHER0,
        weather0: weather,
    }
}

export const setWeather1 = (weather) => {
    return {
        type : SET_WEATHER1,
        weather1: weather,
    }
}

export const setWeather2 = (weather) => {
    return {
        type : SET_WEATHER2,
        weather2: weather,
    }
}

export const setWeather3 = (weather) => {
    return {
        type : SET_WEATHER3,
        weather3: weather,
    }
}