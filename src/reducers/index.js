import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import spotifyReducer from './spotifyReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    spotify: spotifyReducer,
    profile: profileReducer,
});

export default rootReducer;
