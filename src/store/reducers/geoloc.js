import {SET_LATITUDE, SET_LONGITUDE, SET_ADDRESS, SET_TM_X, SET_TM_Y} from '../actions/actionTypes'

const initialState = {
    latitude : 0,
    longitude : 0,
    address : '',
    tm_x : 0,
    tm_y : 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LATITUDE :
            return {
                ...state,
                latitude : action.latitude,
            };
        case SET_LONGITUDE :
            return {
                ...state,
                longitude : action.longitude,
            };
        case SET_ADDRESS :
            return {
                ...state,
                address : action.address,
            };
        case SET_TM_X :
            return {
                ...state,
                tm_x : action.tm_x,
            };
        case SET_TM_Y :
            return {
                ...state,
                tm_y : action.tm_y,
            };
        default:
            return state;
    }
}

export default reducer;