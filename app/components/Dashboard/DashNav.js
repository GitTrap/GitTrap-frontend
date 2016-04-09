import './styles/DashNav.scss';
import React from 'react';
import { Link } from 'react-router';

function DashNav(props){
  return (
    <div className="DashNav">
      <ul>
        <li><Link to="/"><i className="ion-chevron-right"></i>Here</Link></li>
      </ul>
    </div>
  );
}

export default DashNav;
