import './styles/DashNav.scss';
import React from 'react';
import { Link } from 'react-router';

function DashNav(props){
  return (
    <div className="DashNav">
      <ul>
        <li><Link activeStyle={styles.linkActive} to="/dashboard"><i className="ion-chevron-right"></i>Dashboard</Link></li>
        <li><Link activeStyle={styles.linkActive} to="/users"><i className="ion-chevron-right"></i>Users</Link></li>
        <li><Link activeStyle={styles.linkActive} to="/leaderboard"><i className="ion-chevron-right"></i>Leaderboard</Link></li>
      </ul>
    </div>
  );
}

const styles = {
    linkActive: {
        backgroundColor: '#b161fc',
        color: '#fff'
    }
}

export default DashNav;
