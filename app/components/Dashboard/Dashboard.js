import './styles/Dashboard.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DashNav from './DashNav';
import DashCharts from './DashCharts';
import DashFeed from './DashFeed';
import * as dashboardActions from './../../actions/dashboard.js';

class Dashboard extends Component {

  userData () {
    fetch()
  }

  render() {
    return (
      <div className="Dashboard row">
        <div className="col-sm-12 segment">
          <DashCharts />
          <div className="col-sm-6">
            <DashFeed listType="Follower Feed"/>
          </div>
          <div className="col-sm-6">
            <DashFeed listType="Issues"/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.dashboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardRequest: bindActionCreators(dashboardActions.dashboardRequest, dispatch),
    dashboardSuccess: bindActionCreators(dashboardActions.dashboardSuccess, dispatch),
    dashboardError: bindActionCreators(dashboardActions.dashboardError, dispatch),
    getDashboard: bindActionCreators(dashboardActions.getDashboard, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
