//action constants
export const LEADERBOARD_REQUEST = 'LEADERBOARD_REQUEST';
export const LEADERBOARD_SUCCESS = 'LEADERBOARD_SUCCESS';
export const LEADERBOARD_ERROR = 'LEADERBOARD_ERROR';

// actionCreators

export function leaderboardRequest () {
  return {
    type: LEADERBOARD_REQUEST,
    isFetching: true
  }
}

export function leaderboardSuccess (data) {
  return {
    type: LEADERBOARD_SUCCESS,
    isFetching: false,
    data
  }
}

export function leaderboardError (message) {
  return {
    type: LEADERBOARD_ERROR,
    isFetching: false,
    message
  }
}

export function getLeaderboards (token, user) {
  return dispatch => {
    dispatch(leaderboardRequest());
    return fetch('http://172.18.2.185:1337/leaderboards', {
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
        dispatch(leaderboardSuccess(res))
      }).catch(err => console.log('Error: ', err))
  }
}
