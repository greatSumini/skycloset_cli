import {SET_WEATHER0, SET_WEATHER1, SET_WEATHER2, SET_WEATHER3, SET_WEEK_WEATHER, SET_HOURLY_WEATHER} from './actionTypes';

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

export const setWeekWeather = (weekWeather) => {
    return {
        type : SET_WEEK_WEATHER,
        weekWeather : weekWeather
    }
}

export const setHourlyWeather = (hourlyWeather) => {
    return {
        type : SET_HOURLY_WEATHER,
        hourlyWeather : hourlyWeather,
    }
}