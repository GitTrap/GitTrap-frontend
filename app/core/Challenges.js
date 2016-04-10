import I from 'immutable'

export function handleChallengesRequest (state) {
  state = I.fromJS(state);
  var update = state.set('isFetching', true);
  return update.toJS();
}

export function handleChallengesSuccess (state, data) {
    state = I.fromJS(state);
    var update = state.set('isFetching', false).
                       set('challenges', I.fromJS(data));

     return update.toJS();
}

export function handleChallengesError (state, message) {
    state = I.fromJS(state);
    var update = state.set('isFetching', false).
                 set('error', message);
    return update.toJS();
}

export function handleAddChallengee (state, person) {
  state = I.fromJS(state);
  var update = state.set('isFetching', false).
                     updateIn(['challenges', 'challengees'], arr => arr.push(person))
  return update.toJS();
}

export function handleGetUsers ( state, users ) {
  state = I.fromJS(state);
  var usernames = users[0].users.map((user, key) => {
    return user.username;
  });
  var update = state.set('devPool', I.fromJS(usernames));
  return update.toJS();
}

export function handleGetChallengeInfo (state, info) {
    state = I.fromJS(state);
    var update = state.set('goalOne', info.goalOne).
                       set('goalTwo', info.goalTwo).
                       set('goalThree', info.goalThree).
                       set('challengees', I.fromJS(info.challengees));
    return update.toJS();
}
