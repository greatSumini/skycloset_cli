import {SET_DUST, SET_DIST} from './actionTypes';

export const setDust = (dust) => {
    return {
        type: SET_DUST,
        dust : dust,
    };
}

export const setDist = (dist) => {
    return {
        type: SET_DIST,
        dist : dist,
    };
}