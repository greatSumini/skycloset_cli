import {SET_CURRENT_BIAS, SET_CURRENT_GENDER, SET_CURRENT_WEATHER} from '../actions/actionTypes'

const initialState = {
    currentBias : 0,
    currentGender : 0,
    currentWeather : {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_BIAS :
            return {
                ...state,
                currentBias : action.currentBias,
            };
        case SET_CURRENT_GENDER :
            return {
                ...state,
                currentGender : action.currentGender,
            };
        case SET_CURRENT_WEATHER :
            return {
                ...state,
                currentWeather : action.currentWeather
            };
        default:
            return state;
    }
}

export default reducer;