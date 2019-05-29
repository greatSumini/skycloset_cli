import {SET_DUST, SET_DIST} from '../actions/actionTypes'

const initialState = {
    dust : {},
    dist : 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DUST :
            return {
                ...state,
                dust : action.dust,
            };
        case SET_DIST :
            return {
                ...state,
                dist : action.dist,
            };
        default:
            return state;
    }
}

export default reducer;