import {SET_WEATHER0, SET_WEATHER1, SET_WEATHER2, SET_WEATHER3} from '../actions/actionTypes'

const initialState = {
    weather0: {},
    weather1: {},
    weather2: {},
    weather3: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER0 :
            return {
                ...state,
                weather0: action.weather0,
            };
        case SET_WEATHER1 :
            return {
                ...state,
                weather1: action.weather1,
            };
        case SET_WEATHER2 :
            return {
                ...state,
                weather2: action.weather2,
            };
        case SET_WEATHER3 :
            return {
                ...state,
                weather3: action.weather3,
            };
        default:
            return state;
    }
}

export default reducer;