import './styles/DashFeed.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DashFeed extends Component {

  render () {

    var data = [
      'shit'
    ];

    var feed = data.map((item, key) => {
      return (
        <div className="update-item" key={key}>
          <h3 className="title">{ item.repo }</h3>
          <h5 className="date">{item.type}</h5>
          <p>{item.branch}</p>
          <p>{item.user}</p>
          <p>{item.type}</p>
          <p>{item.repo}</p>
          <p>{item.branch}</p>
        </div>
      );
    });
    return (
      <div className="DashFeed">
        <h3 className="feed-header">{this.props.listType}</h3>
        <div className="feed-wrap">
          {feed}
        </div>
      </div>
    );
  }
}
