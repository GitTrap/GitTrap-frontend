import './styles/LeaderboardCategory.scss';
import React from 'react';
import { Link } from 'react-router';

export default function LeaderboardCategory (props) {
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
      <li className="row nopadding" key={key}>
        <p className="col-sm-3">{person.user}</p>
        <p className="col-sm-3">{person.type}</p>
        <p className="col-sm-3">{person.repo}</p>
        <p className="col-sm-3">{person.branch}</p>
      </li>
    );
  });
  return (
    <div className="LeaderboardCategory">
      <ul>
        {leaders}
      </ul>
    </div>
  );
}
