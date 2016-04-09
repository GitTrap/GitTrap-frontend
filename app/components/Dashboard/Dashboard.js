import './styles/Dashboard.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import DashNav from './DashNav';
import DashCharts from './DashCharts';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="col-sm-2 DashNavWrap nopadding">
          <DashNav />
        </div>
        <div className="col-sm-10 DashContentWrap nopadding segment">
          <DashCharts />
        </div>
      </div>
    );
  }
}
