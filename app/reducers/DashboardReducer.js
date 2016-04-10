import I from 'immutable';
import {
  DASHBOARD_REQUEST,
  DASHBOARD_SUCCESS,
  DASHBOARD_ERROR
} from './../actions/DashboardActions.js';

import {
  handleDashboardRequest,
  handleDashboardSuccess,
  handleDashboardError
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

    default:
      return state;
  }
}
