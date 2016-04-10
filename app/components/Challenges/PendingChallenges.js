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
        <Link style={styles.addButton} to="/challenges/createchallenge">+</Link>
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
              <img src="https://avatars0.githubusercontent.com/u/13911839"/>
              <div className="info">
                <p><h3>{this.props.challenges.challengees[0]}</h3></p>
                <p><strong>commits</strong>: 6</p>
                <p><strong>Streak</strong>: 7</p>
                <p><strong>contributions</strong>: 4</p>
              </div>
            </div>

            <div className="challengers">
              <img src="https://avatars3.githubusercontent.com/u/8888991"/>
              <div className="info">
                <p><h3>kennetpostigo</h3></p>
                <p><strong>commits</strong>: 7</p>
                <p><strong>Streak</strong>: 1</p>
                <p><strong>contributions</strong>: 2</p>
              </div>
            </div>

            <div className="challengers">
              <img src="https://avatars1.githubusercontent.com/u/1750392"/>
              <div className="info">
                <p><h3>jalvarado91</h3></p>
                <p><strong>commits</strong>: 12</p>
                <p><strong>Streak</strong>: 1</p>
                <p><strong>contributions</strong>: 1</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const styles = {
  addButton: {
    background: '#efb61f',
    color: 'white',
    padding: '14px 0',
    textAlign: 'center',
    fontWeight: '800',
    width: '100%',
    marginBottom: '40px',
    maxWidth: '640px',
    fontSize: '2em',
    lineHeight: '1em',
    textDecoration: 'none',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
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
