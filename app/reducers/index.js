import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {dashboardReducer} from './DashboardReducer.js';
import {leaderboardReducer} from './LeaderBoardReducer.js';

export default combineReducers({
  routing,
  dashboard: dashboardReducer,
  leaderboards: leaderboardReducer
});
