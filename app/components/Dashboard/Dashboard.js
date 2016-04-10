import './styles/Dashboard.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DashNav from './DashNav';
import DashCharts from './DashCharts';
import DashFeed from './DashFeed';
import * as dashboardActions from './../../actions/DashboardActions.js';

class Dashboard extends Component {

  constructor (props, context) {
    super(props, context);
  }

  getDashboardData () {
    this.props.getDashboard( 'shit', 'kennetpostigo')
  }

  componentDidMount () {
    this.getDashboardData();
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="col-sm-12 dash-parts">
          <DashCharts />
          <div className="dash-feed-wrap">
            <div style={styles.leftCol} className="col-sm-6">
              <DashFeed leaderboardsData={this.props.info.followersFeed} listType="Follower Feed"/>
            </div>
            <div style={styles.rightCol} className="col-sm-6">
              <DashFeed leaderboardsData={this.props.info.issuesFeed} listType="Issues"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  leftCol: {
    padding: 0,
    borderRight: '1px solid #EAEAEA',
    width: '50%',
    height: '100%',
    position: 'absolute'
  },
  rightCol: {
    paddingLeft: 0,
    width: '50%',
    height: '100%',
    left: '50%'
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
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
