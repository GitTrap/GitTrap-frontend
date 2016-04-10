import I from 'immutable';

export function handleUserRequest (state) {
  state = I.fromJS(state);
  var update = state.set('isFetching', true);
  return update.toJS();
}

export function handleUserSuccess (state, users) {
  state = I.fromJS(state);
  var setType = users[0].users.map((user, key) => {
    return {
      username: user.username,
      avatar: user.avatar_url
    };
  });
  var update = state.set('devPool', I.fromJS(setType));
  return update.toJS();
}

export function handleUserError (state, message) {
  state = I.fromJS(state);
  var update = state.set('isFetching', false).
               set('error', message);
  return update.toJS();
}
