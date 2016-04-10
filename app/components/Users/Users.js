import './styles/Users.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import shell from 'shell';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.onUserClick = this.onUserClick.bind(this);
  }

  onUserClick(event, login) {
    event.preventDefault();
    shell.openExternal(`http://github.com/${login}`);
  }

  render() {
    const following = [
      {
        id: 69156,
        login: "chriscoyier",
        gravatar_id: "",
        url: "https://api.github.com/users/chriscoyier",
        avatar_url: "https://avatars.githubusercontent.com/u/69156?"
      },
      {
        id: 69156,
        login: "chriscoyier",
        gravatar_id: "",
        url: "https://api.github.com/users/chriscoyier",
        avatar_url: "https://avatars.githubusercontent.com/u/69156?"
      },
      {
        id: 69156,
        login: "chriscoyier",
        gravatar_id: "",
        url: "https://api.github.com/users/chriscoyier",
        avatar_url: "https://avatars.githubusercontent.com/u/69156?"
      },
      {
        id: 69156,
        login: "chriscoyier",
        gravatar_id: "",
        url: "https://api.github.com/users/chriscoyier",
        avatar_url: "https://avatars.githubusercontent.com/u/69156?"
      },
      {
        id: 69156,
        login: "chriscoyier",
        gravatar_id: "",
        url: "https://api.github.com/users/chriscoyier",
        avatar_url: "https://avatars.githubusercontent.com/u/69156?"
      }
    ];

    var users = following.map((person, key) => {
      return (
        <div key={key} className="user-item">
          <img src={person.avatar_url}/>
          <a href="#" onClick={(event) => this.onUserClick(event, person.login)} className="user">{person.login}</a>
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
