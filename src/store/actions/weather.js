import {SET_WEATHER} from './actionTypes';

export const setWeather = (weather) => {
    return {
        type : SET_WEATHER,
        weather: weather,
    }
}