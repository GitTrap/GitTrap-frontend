import './styles/Landing.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1>Git Trap</h1>
          <Link to="/dashboard" className="btn btn-lg">Start Trappin</Link>
      </div>
    );
  }
}
