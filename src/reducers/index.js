import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import spotifyReducer from './spotifyReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    spotify: spotifyReducer,
    user: userReducer
});

export default rootReducer;
