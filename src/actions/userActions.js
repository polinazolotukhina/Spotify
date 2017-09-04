import * as types from '../constants/actionTypes';
const queryString = require('query-string');


// ------------------TOKEN------------------
function saveIt(tokenToSave) {
    return {
        type: types.GET_TOKEN,
        token: tokenToSave
    };
}

export function passToken(token) {
  return (dispatch) => {
    dispatch(saveIt(token));
  };
}


// -------------- USER PROFILE ----------------------
function getProfile(token) {
    return {
        type: types.GET_USER_PROFILE,
        token: token
    };
}

export function fetchProfile(token) {
    return (dispatch) => {
        dispatch(getProfile(id));
    };
}


// ------------------------------------
