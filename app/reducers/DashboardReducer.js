import I from 'immutable';
import {
  DASHBOARD_REQUEST,
  DASHBOARD_SUCCESS,
  DASHBOARD_ERROR,
  COMMIT_CHART,
  TOP_REPOS,
  LANGUAGES_CHART
} from './../actions/DashboardActions.js';

import {
  handleDashboardRequest,
  handleDashboardSuccess,
  handleDashboardError,
  handleCommitChart,
  handleTopReposChart,
  handleLanguagesChart
} from './../core/Dashboard.js';

const init = I.Map({
  isFetching: false,
  followersFeed:'',
  issuesFeed:'',
  commitChart:'',
  topRepos: '',
  languages: ''
});

export function dashboardReducer (state = init, action) {
  switch (action.type) {

    case DASHBOARD_REQUEST:
      return handleDashboardRequest(state);

    case DASHBOARD_SUCCESS:
      return handleDashboardSuccess(state, action.data);

    case DASHBOARD_ERROR:
      return handleDashboardError(state, action.message);

    case COMMIT_CHART:
      return handleCommitChart(state, action.commits);

    case TOP_REPOS:
      return handleTopReposChart(state, action.repos);

    case LANGUAGES_CHART:
      return handleLanguagesChart(state, action.info);

    default:
      return state;
  }
}
