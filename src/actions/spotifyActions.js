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
const parsed = queryString.parse(location.hash);

export function searchSpotify(query, type) {

    const headers = {
        "Accept": "application/json",
        "Authorization": "Bearer " + parsed.access_token
    }

    const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;

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
