import {SET_LOCATION, SET_ADDRESS} from '../actions/actionTypes'

const initialState = {
    location: {},
    address: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOCATION :
            return {
                ...state,
                location : action.location,
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