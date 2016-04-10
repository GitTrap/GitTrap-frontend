import I from 'immutable';
import {
  LEADERBOARD_REQUEST,
  LEADERBOARD_SUCCESS,
  LEADERBOARD_ERROR
} from './../actions/LeaderBoard.js';

import {
  handleLeaderboardRequest,
  handleLeaderboardSuccess,
  handleLeaderboardError
} from './../core/LeaderBoard.js';

const init = I.Map({
  isFetching: 'yo',
  streakLeaderboard: 'shit',
  commitsLeaderboard: 'fuck',
  contributionsLeaderboard: 'stack'
});

export function leaderboardReducer (state = init.toJS(), action) {
  switch (action.type) {

    case LEADERBOARD_REQUEST:
      return handleLeaderboardRequest(state);

    case LEADERBOARD_SUCCESS:
      return handleLeaderboardSuccess(state, action.data);

    case LEADERBOARD_ERROR:
      return handleLeaderboardError(state, action.message);

    default:
      return state;
  }
}
