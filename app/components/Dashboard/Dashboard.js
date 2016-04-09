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
        <div className="col-sm-2 nopadding">
          <DashNav />
        </div>
        <div className="col-sm-10 nopadding segment">
          <DashCharts />
          <div className="col-sm-6 nopadding">
            <DashFeed listType="Follower Stream"/>
          </div>
          <div className="col-sm-6 nopadding">
            <DashFeed listType="Issues"/>
          </div>
        </div>
      </div>
    );
  }
}
