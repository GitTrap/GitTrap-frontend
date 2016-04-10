import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {dashboardReducer} from './DashboardReducer.js';
import {leaderboardReducer} from './LeaderBoardReducer.js';
import {challengesReducer} from './ChallengesReducer.js';

export default combineReducers({
  routing,
  dashboard: dashboardReducer,
  leaderboards: leaderboardReducer,
  challenges: challengesReducer
});
