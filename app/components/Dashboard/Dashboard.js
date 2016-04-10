import './styles/Dashboard.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import DashNav from './DashNav';
import DashCharts from './DashCharts';
import DashFeed from './DashFeed';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="col-sm-12 dash-parts">
          <DashCharts />
          <div className="dash-feed-wrap">
            <div style={styles.leftCol} className="col-sm-6">
              <DashFeed listType="Follower Feed"/>
            </div>
            <div style={styles.rightCol} className="col-sm-6">
              <DashFeed listType="Issues"/>
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
