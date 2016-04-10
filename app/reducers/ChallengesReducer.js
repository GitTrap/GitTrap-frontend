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
  challenges
});

export function challengesReducer (state = init, action) {
  switch (action.type) {

    case DASHBOARD_REQUEST:
      return handleChallengesRequest(state);

    case DASHBOARD_SUCCESS:
      return handleChallengesSuccess(state, action.data);

    case DASHBOARD_ERROR:
      return handleChallengesError(state, action.message);

    default:
      return state;
  }
}
