import {SET_LATITUDE, SET_LONGITUDE, SET_ADDRESS} from '../actions/actionTypes'

const initialState = {
    latitude : 0,
    longitude : 0,
    address : '',
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
        default:
            return state;
    }
}

export default reducer;