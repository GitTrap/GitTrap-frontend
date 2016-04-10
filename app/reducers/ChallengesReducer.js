import I from 'immutable';
import {
  CHALLENGES_REQUEST,
  CHALLENGES_SUCCESS,
  CHALLENGES_ERROR,
  ADD_CHALLENGEE,
  GET_USERS,
  GET_CHALLENGE_INFO
} from './../actions/ChallengesActions.js';

import {
  handleChallengesRequest,
  handleChallengesSuccess,
  handleChallengesError,
  handleAddChallengee,
  handleGetUsers,
  handleGetChallengeInfo
} from './../core/Challenges.js';

const init = I.Map({
  isFetching: false,
  challenges: I.Map({
    goalOne: '',
    goalTwo: '',
    goalThree: '',
    challengees: I.List.of()
  })
});

export function challengesReducer (state = init.toJS(), action) {
  switch (action.type) {

    case CHALLENGES_REQUEST:
      return handleChallengesRequest(state);

    case CHALLENGES_SUCCESS:
      return handleChallengesSuccess(state, action.data);

    case CHALLENGES_ERROR:
      return handleChallengesError(state, action.message);

    case ADD_CHALLENGEE:
      return handleAddChallengee(state, action.person);

    case GET_USERS:
      return handleGetUsers(state, action.users);

    case GET_CHALLENGE_INFO:
      return handleGetChallengeInfo(state, action.info)

    default:
      return state;
  }
}
