import './styles/DashNav.scss';
import React from 'react';
import { Link } from 'react-router';

function DashNav(props){
  return (
    <div className="DashNav">
      <ul>
        <li><Link to="/"><i className="ion-chevron-right"></i>Landing</Link></li>
        <li><Link to="/users"><i className="ion-chevron-right"></i>Users</Link></li>
        <li><Link to="/leaderboard"><i className="ion-chevron-right"></i>Leaderboard</Link></li>
      </ul>
    </div>
  );
}

export default DashNav;
