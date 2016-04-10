//constants
export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const DASHBOARD_ERROR = 'DASHBOARD_ERROR';

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
        'token': info.token,
        'username': info.username
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
