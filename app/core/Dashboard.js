import I from 'immutable'

export function handleDashboardRequest (state) {
  state = I.fromJS(state);
  var update = state.set('isFetching', true);
  return update.toJS();
}

export function handleDashboardSuccess (state, data) {
    state = I.fromJS(state);
    var update = state.set('isFetching', false).
                 set('followersFeed', 'temp').
                 set('issuesFeed', 'temp2').
                 set('commitChart', 'temp3').
                 set('topRepos', 'temp4').
                 set('languages', 'temp5');

     return update.toJS();
}

export function handleDashboardError (state, message) {
    state = I.fromJS(state);
    var update = state.set('isFetching', false).
                 set('error', message);
    return update.toJS();
}
