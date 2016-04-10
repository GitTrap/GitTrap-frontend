//constants
export const CHALLENGES_REQUEST = 'CHALLENGES_REQUEST';
export const CHALLENGES_SUCCESS = 'CHALLENGES_SUCCESS';
export const CHALLENGER_ERROR = 'CHALLENGER_ERROR';

//actionCreators

export function challengesRequest () {
  return {
    type: CHALLENGES_REQUEST,
    isFetching: true
  }
}

export function challengesSuccess (data) {
  return {
    type: CHALLENGES_SUCCESS,
    isFetching: false,
    data
  }
}
export function challengesError (message) {
  return {
    type: CHALLENGER_ERROR,
    isFetching: false,
    message
  }
}

export function getChallenge (info) {
  return dispatch => {
    dispatch(challengesRequest());
    return fetch('http://172.18.2.185:1337/challenge', {
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
          dispatch(challengesError(res.error));
        } else {
          dispatch(challengesSuccess(res));
        }
      }).catch(err => console.log('Error: ', err))
  }
}

export function createChallenge (info) {
  return dispatch => {
    dispatch(challengesRequest());
    return fetch('http://172.18.2.185:1337/challenge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'goalOne': info.goalOne,
        'goalTwo': info.goalTwo,
        'goalThree': info.goalThree,
        'challengees': info.challengees,
        'username': info.username
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if (res.error) {
          dispatch(challengesError(res.error));
        } else {
          dispatch(challengesSuccess(res));
        }
      }).catch(err => console.log('Error: ', err))
  }
}
