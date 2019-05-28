import {SET_DUST} from './actionTypes';

export const setDust = (dust) => {
    return {
        type: SET_DUST,
        dust : dust,
    };
}