import I from 'immutable';

export function handleLeaderboardRequest (state) {
  state = I.fromJS(state);
  return state.set('isFetching', true);
}

export function handleLeaderboardSuccess (state, data) {
  state = I.fromJS(state);
  return state.set('isFetching', false).
               set('streakLeaderboard', 'temp').
               set('commitsLeaderboard', 'temp2').
               set('contributionsLeaderboard', 'temp3');
}

export function handleLeaderboardError (state, message) {
  state = I.fromJS(state);
  return state.set('isFetching', false).
               set('error', message);
}
