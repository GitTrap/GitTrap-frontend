import './styles/Users.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './../../actions/UserActions.js';
import { Link } from 'react-router';
import shell from 'shell';

class Users extends Component {

  constructor(props) {
    super(props);
    this.onUserClick = this.onUserClick.bind(this);
  }

  componentDidMount () {
    this.props.getUsers();
  }

  onUserClick(event, login) {
    event.preventDefault();
    shell.openExternal(`http://github.com/${login}`);
  }

  render() {

    var users = this.props.users.devPool.map((user, key) => {
      return (
        <div key={key} className="user-item">
          <img src={user.avatar}/>
          <a href="#" onClick={(event) => this.onUserClick(event, user.username)} className="user">{user.username}</a>
          <div className="actions">
            <a className="btn btn-default" href="#">Super Follow</a>
            <a className="btn btn-default" href="#">Unfollow</a>
          </div>
        </div>
      );
    });

    return (
      <div className="Users">
        <h1>Following</h1>
        <div className="narrow-container">
          {users}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userRequest: bindActionCreators(userActions.userRequest, dispatch),
    userSuccess: bindActionCreators(userActions.userSuccess, dispatch),
    userError: bindActionCreators(userActions.userError, dispatch),
    getUsers: bindActionCreators(userActions.getUsers, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
