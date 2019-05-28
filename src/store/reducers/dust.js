import {SET_DUST} from '../actions/actionTypes'

const initialState = {
    dust : {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DUST :
            return {
                ...state,
                dust : action.dust,
            };
        default:
            return state;
    }
}

export default reducer;