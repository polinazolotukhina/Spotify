import {
    GET_USER_PROFILE,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
              ...state,
              user: action.user
            };
        default:
            return state;
    }
}
