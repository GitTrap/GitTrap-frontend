import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import LeaderboardCategory from './LeaderboardCategory';
import * as leaderboardActions from './../../actions/LeaderBoard.js';

 class LeaderBoard extends Component {

   constructor (props, context) {
     super(props, context);
   }

   getLeaderboardsData () {
     this.props.getLeaderboards();
   }

   componentDidMount () {
     this.getLeaderboardsData();
   }

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

function mapStateToProps(state) {
  return {
    info: state.leaderboards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    leaderboardRequest: bindActionCreators(leaderboardActions.leaderboardRequest, dispatch),
    leaderboardSuccess: bindActionCreators(leaderboardActions.leaderboardSuccess, dispatch),
    leaderboardError: bindActionCreators(leaderboardActions.leaderboardError, dispatch),
    getLeaderboards: bindActionCreators(leaderboardActions.getLeaderboards, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoard);
