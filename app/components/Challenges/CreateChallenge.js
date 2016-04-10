import './styles/CreateChallenge.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class CreateChallenge extends Component {
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

    var stuff = data.map((item, key) => {
      return (
        <li key={key}>
          <p>{item}</p>
          <button className="btn btn-sm">+</button>
        </li>
      );
    });

    return (
      <div className="CreateChallenge">
        <h3>Create a Challenge</h3>
        <div className="setGoal">
          <label>Goal #1</label>
          <input className="form-control" type="text"></input>
          <label>Goal #2</label>
          <input className="form-control" type="text"></input>
          <label>Goal #3</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="followersToChallenge">
          <ul>
            {stuff}
          </ul>
        </div>
        <button className="submit btn btn-default">Submit Challenge</button>
      </div>
    );
  }
}
