import React, { Component } from 'react';
import { Link } from 'react-router';
import LeaderboardCategory from './LeaderboardCategory';

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="LeaderBoard">
        <div className="row">
          <div className="col-sm-4">
            <LeaderboardCategory />
          </div>
          <div className="col-sm-4">
            <LeaderboardCategory />
          </div>
          <div className="col-sm-4">
            <LeaderboardCategory />
          </div>
        </div>
      </div>
    );
  }
}
