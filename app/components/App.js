import './Dashboard/styles/App.scss';
import React, { Component, PropTypes } from 'react';
import DashNav from './Dashboard/DashNav';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2 DashNavWrap">
            <DashNav />
          </div>
          <div className="col-sm-10 DashContentWrap">
            {this.props.children}
          </div>
        </div>
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
