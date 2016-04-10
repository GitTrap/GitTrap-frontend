import I from 'immutable'

export function handleDashboardRequest (state) {
  state = I.fromJS(state);
  var update = state.set('isFetching', true);
  return update.toJS();
}

export function handleDashboardSuccess (state, data) {
    state = I.fromJS(state);
    var issue = data.filter((item) => {
      return item.type.toLowerCase().indexOf('issue') > -1;
    });
    var feed = data.filter((item) => {
      return item.type.toLowerCase().indexOf('issue') === -1;
    })
    console.log('feed', feed);
    console.log('issue', issue);
    console.log('dataFromCore', data)
    var update = state.set('isFetching', false).
                 set('followersFeed', I.fromJS(feed)).
                 set('issuesFeed', I.fromJS(issue)).
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
