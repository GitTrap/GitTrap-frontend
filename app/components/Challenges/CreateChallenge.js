import './styles/CreateChallenge.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as challengeActions from './../../actions/ChallengesActions.js';
import { Link } from 'react-router';


class CreateChallenge extends Component {

  constructor (props, context) {
    super(props, context);
    this.loadUsers = this.loadUsers.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
    this.loadChallenge = this.loadChallenge.bind(this);
    this.submitChallenge = this.submitChallenge.bind(this);
    this.addToChallengees = this.addToChallengees.bind(this);
  }

  componentDidMount () {
    this.loadUsers();
  }

  loadUsers () {
    this.props.getChallengeUsers();
  }

  loadChallenge () {
    this.props.getChallenge();
  }

  submitChallenge () {
    var goal = {
      goalOne: this.refs.goalOne.value,
      goalTwo: this.refs.goalTwo.value,
      goalThree: this.refs.goalThree.value,
      challengees: this.props.challenges.challenges.challengees
    }
    console.log(goal);
    this.props.createChallenge(goal);
  }

  addToChallengees (person) {
    if(this.props.challenges.challenges.challengees.length < 2) {
      this.props.addChallengee(person)
    }
  }

  render() {

    var data = [
      'kennetpostigo',
      'jonycodes',
      'darkfadr',
      'danabramov',
      'aparagas',
      'sceptre12',
      'hoes'
    ]

    var stuff = this.props.challenges.devPool.map((item, key) => {
      return (
        <li key={key}>
          <p>{item}</p>
          <button onClick={this.addToChallengees.bind(this, item)} className="btn btn-sm">+</button>
        </li>
      );
    });

    return (
      <div className="CreateChallenge">
        <h3>Create a Challenge</h3>
        <div className="setGoal">
          <label>Goal #1</label>
          <input ref="goalOne" className="form-control" type="text"></input>
          <label>Goal #2</label>
          <input ref="goalTwo" className="form-control" type="text"></input>
          <label>Goal #3</label>
          <input ref="goalThree" className="form-control" type="text"></input>
        </div>
        <div className="followersToChallenge">
          <ul>
            {stuff}
          </ul>
        </div>
        <button onClick={this.submitChallenge} className="submit btn btn-default">Submit Challenge</button>
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
    challengesRequest: bindActionCreators(challengeActions.challengesRequest, dispatch),
    challengesSuccess: bindActionCreators(challengeActions.challengesSuccess, dispatch),
    challengesError: bindActionCreators(challengeActions.challengesError, dispatch),
    getChallenge: bindActionCreators(challengeActions.getChallenge, dispatch),
    createChallenge: bindActionCreators(challengeActions.createChallenge, dispatch),
    getUsers: bindActionCreators(challengeActions.getUsers, dispatch),
    addChallengee: bindActionCreators(challengeActions.addChallengee, dispatch),
    getChallengeUsers: bindActionCreators(challengeActions.getChallengeUsers, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChallenge);


<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A2rp5riHULWgrXPsDtsp1ir" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
