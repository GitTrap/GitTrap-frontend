import I from 'immutable'

export function handleChallengesRequest (state) {
  state = I.fromJS(state);
  var update = state.set('isFetching', true);
  return update.toJS();
}

export function handleChallengesSuccess (state, data) {
    state = I.fromJS(state);
    var update = state.set('isFetching', false).
                       set('challenges', I.fromJS(feed));

     return update.toJS();
}

export function handleChallengesError (state, message) {
    state = I.fromJS(state);
    var update = state.set('isFetching', false).
                 set('error', message);
    return update.toJS();
}
