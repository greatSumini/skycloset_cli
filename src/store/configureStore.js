import { createStore, combineReducers } from 'redux';

import geolocReducer from './reducers/geoloc'
import weatherReducer from './reducers/weather'

const rootReducer = combineReducers({
    geoloc : geolocReducer,
    weather : weatherReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;