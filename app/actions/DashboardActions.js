//constants
export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const DASHBOARD_ERROR = 'DASHBOARD_ERROR';
export const COMMIT_CHART = 'COMMIT_CHART';
export const TOP_REPOS = 'TOP_REPOS';
export const LANGUAGES_CHART = 'LANGUAGES_CHART';

//actionCreators

export function dashboardRequest () {
  return {
    type: DASHBOARD_REQUEST,
    isFetching: true
  }
}

export function dashboardSuccess (data) {
  return {
    type: DASHBOARD_SUCCESS,
    isFetching: false,
    data
  }
}
export function dashboardError (message) {
  return {
    type: DASHBOARD_ERROR,
    isFetching: false,
    message
  }
}

export function commitChart (commits) {
  return {
    type: COMMIT_CHART,
    isFetching: true,
    commits
  }
}

export function topReposChart (repos) {
  return {
    type: TOP_REPOS,
    isFetching: false,
    repos
  }
}
export function languagesChart (info) {
  return {
    type: LANGUAGES_CHART,
    isFetching: false,
    info
  }
}

export function getCommitChart (info) {
  return dispatch => {
    dispatch(dashboardRequest());
    return fetch('http://172.18.2.185:1337/frequency', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': info
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(commitChart(res))
      }).catch(err => console.log('Error: ', err))
  }
}

export function getTopReposChart (info) {
  return dispatch => {
    return fetch('http://172.18.2.185:1337/top-repos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': info
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(topReposChart(res))
      }).catch(err => console.log('Error: ', err))
  }
}

export function getLanguagesChart (info) {
  return dispatch => {
    return fetch('http://172.18.2.185:1337/languages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': info
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(languagesChart(res))
      }).catch(err => console.log('Error: ', err))
  }
}

export function getDashboard (info) {
  return dispatch => {
    dispatch(dashboardRequest());
    return fetch('http://172.18.2.185:1337/dashboard', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': info
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if (res.error) {
          dispatch(dashboardError(res.error));
        } else {
          dispatch(dashboardSuccess(res));
        }
      }).catch(err => console.log('Error: ', err))
  }
}
