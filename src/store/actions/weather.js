import {SET_WEATHER, SET_FORECAST, SET_PAST_WEATHER} from './actionTypes';

export const setWeather = (weather) => {
    return {
        type : SET_WEATHER,
        weather: weather,
    }
}

export const setForecast = (forecast) => {
    return {
        type : SET_FORECAST,
        forecast : forecast,
    }
}

export const setPastWeather = (pastWeather) => {
    return {
        type : SET_PAST_WEATHER,
        pastWeather: pastWeather,
    }
}