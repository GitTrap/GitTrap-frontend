import './styles/Challenges.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Challenges extends Component {
  render() {
    return (
      <div className="Challenges">
        {this.props.children}
      </div>
    );
  }
}
