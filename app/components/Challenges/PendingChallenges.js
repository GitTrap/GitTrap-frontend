import './styles/Challenges.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class PendingChallenges extends Component {
  render() {
    return (
      <div className="Challenges">
        <Link to="/challenges/createchallenge">+</Link>
          <div className="goal">
            <h1>Goal</h1>
            <ol>
              <li>something 1</li>
              <li>something 2</li>
              <li>something 3</li>
            </ol>
          </div>
          <div className="users">
            <div className="challengers">
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png"/>
              <div className="info">
                <p>jalvarado91</p>
                <p>commits: 200</p>
                <p>Streak: 7</p>
                <p>contributions: 4</p>
              </div>
            </div>

            <div className="challengers">
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png"/>
              <div className="info">
                <p>jalvarado91</p>
                <p>commits: 200</p>
                <p>Streak: 7</p>
                <p>contributions: 4</p>
              </div>
            </div>

            <div className="challengers">
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png"/>
              <div className="info">
                <p>jalvarado91</p>
                <p>commits: 200</p>
                <p>Streak: 7</p>
                <p>contributions: 4</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
