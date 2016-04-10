import './styles/Challenges.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as challengeActions from './../../actions/ChallengesActions.js';
import { Link } from 'react-router';


class PendingChallenges extends Component {

  componentDidMount () {
    this.props.retreiveChallengeInfo();
  }

  render() {
    return (
      <div className="Challenges">
        <Link to="/challenges/createchallenge">+</Link>
          <div className="goal">
            <h1>Goal</h1>
            <ol>
              <li>{this.props.challenges.goalOne}</li>
              <li>{this.props.challenges.goalTwo}</li>
              <li>{this.props.challenges.goalThree}</li>
            </ol>
          </div>
          <div className="users">
            <div className="challengers">
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png"/>
              <div className="info">
                <p>{this.props.challenges.challengees[0]}</p>
                <p>commits: 6</p>
                <p>Streak: 7</p>
                <p>contributions: 4</p>
              </div>
            </div>

            <div className="challengers">
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png"/>
              <div className="info">
                <p>kennetpostigo</p>
                <p>commits: 7</p>
                <p>Streak: 1</p>
                <p>contributions: 2</p>
              </div>
            </div>

            <div className="challengers">
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png"/>
              <div className="info">
                <p>jalvarado91</p>
                <p>commits: 12</p>
                <p>Streak: 1</p>
                <p>contributions: 1</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retreiveChallengeInfo: bindActionCreators(challengeActions.retreiveChallengeInfo, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingChallenges);
