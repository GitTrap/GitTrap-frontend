import './styles/Challenges.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Challenges extends Component {
  render() {
    return (
      <div className="Challenges">
          <h1>Challenges</h1>
          <div className="goal">
            <h1>Goal</h1>
            <ol>
              <li>something 1</li>
              <li>something 2</li>
              <li>something 3</li>
            </ol>
          </div>
      </div>
    );
  }
}
