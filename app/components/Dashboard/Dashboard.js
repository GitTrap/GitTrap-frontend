import './styles/Dashboard.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import DashNav from './DashNav';
import DashCharts from './DashCharts';
import DashFeed from './DashFeed';

export default class Dashboard extends Component {
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
