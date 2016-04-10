import './styles/DashFeed.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DashFeed extends Component {

  render () {

    var data = [
      'shit'
    ]

    var feed = data.map((item, key) => {
      return (
        <li className="row nopadding" key={key}>
          <p className="col-sm-3">{item.user}</p>
          <p className="col-sm-3">{item.type}</p>
          <p className="col-sm-3">{item.repo}</p>
          <p className="col-sm-3">{item.branch}</p>
        </li>
      );
    });
    return (
      <div className="DashFeed">
        <ul>
          <h3>{this.props.listType}</h3>
          {feed}
        </ul>
      </div>
    );
  }
}
