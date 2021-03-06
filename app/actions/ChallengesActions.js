//constants
export const CHALLENGES_REQUEST = 'CHALLENGES_REQUEST';
export const CHALLENGES_SUCCESS = 'CHALLENGES_SUCCESS';
export const CHALLENGER_ERROR = 'CHALLENGER_ERROR';
export const ADD_CHALLENGEE = 'ADD_CHALLENGEE';
export const GET_USERS = 'GET_USERS';
export const GET_CHALLENGE_INFO = 'GET_CHALLENGE_INFO';

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

export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export function addChallengee (person) {
  return {
    type: ADD_CHALLENGEE,
    isFetching: false,
    person
  }
}

export function getChallengeInfo (info) {
  return {
    type: GET_CHALLENGE_INFO,
    isFetching: false,
    info
  }
}


//Async Info


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
        'username': 'kennetpostigo'
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

export function retreiveChallengeInfo () {
  return dispatch => {
    return fetch('http://172.18.2.185:1337/challenge/46', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(getChallengeInfo(res));
      }).catch(err => console.log('Error: ', err))
  }
}



export function getChallengeUsers () {
  return dispatch => {
    return fetch('http://172.18.2.185:1337/devpool', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
          dispatch(getUsers(res));
      }).catch(err => console.log('Error: ', err))
  }
}

export function createChallenge (info) {
  return dispatch => {
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
        dispatch(addChallengee());
      }).catch(err => console.log('Error: ', err))
  }
}
