//action constants
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

// actionCreators

export function userRequest () {
  return {
    type: USER_REQUEST,
    isFetching: true
  }
}

export function userSuccess (users) {
  return {
    type: USER_SUCCESS,
    isFetching: false,
    users
  }
}

export function userError (message) {
  return {
    type: USER_ERROR,
    isFetching: false,
    message
  }
}

export function getUsers(token, user) {
  return dispatch => {
    dispatch(userRequest());
    return fetch('http://172.18.2.185:1337/devpool', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        dispatch(userSuccess(res))
      }).catch(err => console.log('Error: ', err))
  }
}
