import {SET_WEATHER} from '../actions/actionTypes'

const initialState = {
    weather: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER :
            return {
                ...state,
                weather: action.weather,
            };
        default:
            return state;
    }
}

export default reducer;