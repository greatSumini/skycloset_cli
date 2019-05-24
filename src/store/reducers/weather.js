import {SET_WEATHER, SET_FORECAST, SET_PAST_WEATHER} from '../actions/actionTypes'

const initialState = {
    weather: {},
    forecast: {},
    pastWeather: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER :
            return {
                ...state,
                weather: action.weather,
            };
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.forecast,
            };
        case SET_PAST_WEATHER:
            return {
                ...state,
                pastWeather: action.pastWeather,
            };
        default:
            return state;
    }
}

export default reducer;