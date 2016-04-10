import I from 'immutable';

export function handleLeaderboardRequest (state) {
  state = I.fromJS(state);
  var update = state.set('isFetching', true);
  return update.toJS();
}

export function handleLeaderboardSuccess (state, data) {
  state = I.fromJS(state);
  var update = state.set('isFetching', false).
               set('streakLeaderboard', 'temp').
               set('commitsLeaderboard', 'temp2').
               set('contributionsLeaderboard', 'temp3');
   return update.toJS();
}

export function handleLeaderboardError (state, message) {
  state = I.fromJS(state);
  var update = state.set('isFetching', false).
               set('error', message);
  return update.toJS();
}
