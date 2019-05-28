import { createStore, combineReducers, compose } from 'redux';

import geolocReducer from './reducers/geoloc'
import weatherReducer from './reducers/weather'
import currentReducer from './reducers/current'
import dustReducer from './reducers/dust'

const rootReducer = combineReducers({
    geoloc : geolocReducer,
    weather : weatherReducer,
    current : currentReducer,
    dust : dustReducer,
});

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;