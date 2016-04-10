import I from 'immutable';
import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR
} from './../actions/UserActions.js';

import {
  handleUserRequest,
  handleUserSuccess,
  handleUserError
} from './../core/Users.js';

const init = I.Map({
  users: I.List.of()
});

export function usersReducer (state = init.toJS(), action) {
  switch (action.type) {

    case USER_REQUEST:
      return handleUserRequest(state);

    case USER_SUCCESS:
      return handleUserSuccess(state, action.users);

    case USER_ERROR:
      return handleUserError(state, action.message);

    default:
      return state;
  }
}
