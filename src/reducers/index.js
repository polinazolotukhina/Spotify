import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import spotifyReducer from './spotifyReducer';



const rootReducer = combineReducers({
    routing: routerReducer,
    spotify: spotifyReducer,
});

export default rootReducer;
