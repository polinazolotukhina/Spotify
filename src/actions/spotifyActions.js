import * as types from '../constants/actionTypes';
const queryString = require('query-string');

function spotifyRequest() {
    return {
        type: types.SPOTIFY_REQUEST,
        isLoading: true,
        error: null
    };
}

function spotifySuccess(json) {
    return{
        type: types.SPOTIFY_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function spotifyFailure(json) {
    return {
        type: types.SPOTIFY_FAILURE,
        isLoading: false,
        error: json
    };
}

// ------------------CLEAR SEARCH------------------
export function clearSearch() {
    return {
        type: types.CLEAR_SEARCH,
        data: {}
    };
}

// ------------------------------------


export function searchSpotify(partUrl, token, query="", type="") {

    const headers = {
        "Accept": "application/json",
        "Authorization": "Bearer " + token
    }

    const url = `https://api.spotify.com/v1/${partUrl}${query}${type}`;

    return (dispatch) => {
        dispatch(spotifyRequest());
        fetch(url, {
            headers: headers
        })
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(spotifySuccess(items)))
        .catch((error) => dispatch(spotifyFailure(error)));
    };
}





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



//=====================================================
//=====================================================
//=====================================================
 //==!!!!!!!!!!!!========= PROFILE ACTIONS ===========!!!!!!!!!!===
 //=====================================================
 //=====================================================


 function profileRequest() {
     return {
         type: types.PROFILE_REQUEST,
         isLoading: true,
         error: null
     };
 }

 function profileSuccess(json) {
     return{
         type: types.PROFILE_SUCCESS,
         data: json,
         isLoading: false,
         error: null
     };
 }

 function profileFailure(json) {
     return {
         type: types.PROFILE_FAILURE,
         isLoading: false,
         error: json
     };
 }

 export function getProfile(token) {

     const headers = {
         "Accept": "application/json",
         "Authorization": "Bearer " + token
     }

     const url = `https://api.spotify.com/v1/me`;

     return (dispatch) => {
         dispatch(profileRequest());
         fetch(url, {
             headers: headers
         })
         .then((response) => {
             return response;
         })
         .then((response) => response.json())
         .then((items) => dispatch(profileSuccess(items)))
         .catch((error) => dispatch(profileFailure(error)));
     };
 }
