import React, { Component } from 'react';
import { Link } from 'react-router';
import LeaderboardCategory from './LeaderboardCategory';

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="LeaderBoard">
        <div className="row">
          <div style={styles.leftCol} className="col-sm-4">
            <LeaderboardCategory border="streak" boardTitle="Streak"/>
          </div>
          <div style={styles.middleCol} className="col-sm-4">
            <LeaderboardCategory border="commits" boardTitle="Commits"/>
          </div>
          <div style={styles.rightCol} className="col-sm-4">
            <LeaderboardCategory border="contributions" boardTitle="Contributions"/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  leftCol: {
    paddingRight: 0
  },
  middleCol: {
    padding: 0
  },
  rightCol: {
    paddingLeft: 0
  }
}
