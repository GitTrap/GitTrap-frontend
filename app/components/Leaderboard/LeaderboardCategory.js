import './styles/LeaderboardCategory.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LeaderboardCategory extends Component {
  render () {
    const streaks = [
      {
        user: 'kennetpostigo',
        streak: 24
      },
      {
        user: 'jalvarado91',
        streak: 23
      },
      {
        user: 'ash_daddy',
        streak: 39
      },
      {
        user: 'alastairparagas',
        streak: 89
      },
      {
        user: 'darkfader',
        streak: 2
      }
    ];

    var board = [
      {
        type: 'star',
        user: 'kennetpostigo',
        repo: 'react-reach',
        branch: 'master'
      },
      {
        type: 'follow',
        user: 'jalvarado',
        repo: 'gitTrap',
        branch: 'master'
      },
      {
        type: 'created repo',
        user: 'alaingalvan',
        repo: 'plasma',
        branch: 'master'
      },
      {
        type: 'star',
        user: 'kennetpostigo',
        repo: 'react-reach',
        branch: 'master'
      },
      {
        type: 'follow',
        user: 'jalvarado',
        repo: 'gitTrap',
        branch: 'master'
      },
      {
        type: 'created repo',
        user: 'alaingalvan',
        repo: 'plasma',
        branch: 'master'
      },
      {
        type: 'star',
        user: 'kennetpostigo',
        repo: 'react-reach',
        branch: 'master'
      },
      {
        type: 'follow',
        user: 'jalvarado',
        repo: 'gitTrap',
        branch: 'master'
      },
      {
        type: 'created repo',
        user: 'alaingalvan',
        repo: 'plasma',
        branch: 'master'
      }
    ]
    var leaders = board.map((person, key) => {
      return (
        <li key={key}>
          <p>{person.user}</p>
          <p>{person.type}</p>
          <p>{person.repo}</p>
          <p>{person.branch}</p>
        </li>
      );
    });

    return (
      <div className="LeaderboardCategory">
        <h3 className={this.props.border}>{this.props.boardTitle}</h3>
        <ul>
          {leaders}
        </ul>
      </div>
    );

  }
}
