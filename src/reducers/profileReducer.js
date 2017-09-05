import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE,
} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function profileReducer(state = initialState.profile, action) {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
            };

        case PROFILE_SUCCESS:
            return {
              ... state,
              isLoading: false,
              error: null,
              data: action.data
            };

        case PROFILE_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.data
            };

        default:
            return state;
    }
}
