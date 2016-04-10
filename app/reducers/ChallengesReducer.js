import I from 'immutable';
import {
  CHALLENGES_REQUEST,
  CHALLENGES_SUCCESS,
  CHALLENGES_ERROR
} from './../actions/ChallengesActions.js';

import {
  handleChallengesRequest,
  handleChallengesSuccess,
  handleChallengesError
} from './../core/Challenges.js';

const init = I.Map({
  isFetching: false,
  challenges: ''
});

export function challengesReducer (state = init.toJS(), action) {
  switch (action.type) {

    case CHALLENGES_REQUEST:
      return handleChallengesRequest(state);

    case CHALLENGES_SUCCESS:
      return handleChallengesSuccess(state, action.data);

    case CHALLENGES_ERROR:
      return handleChallengesError(state, action.message);

    default:
      return state;
  }
}
