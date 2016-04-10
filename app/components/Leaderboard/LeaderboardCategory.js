import './styles/LeaderboardCategory.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import shell from 'shell';

export default class LeaderboardCategory extends Component {
  constructor(props) {
    super(props);
    this.onUserClick = this.onUserClick.bind(this);
  }

  onUserClick(event, login) {
    event.preventDefault();
    shell.openExternal(`http://github.com/${login}`);
  }

  render () {
    const streaks = [
      {
        login: 'kennetpostigo',
        streak: 24
      },
      {
        login: 'jalvarado91',
        streak: 23
      },
      {
        login: 'ash_daddy',
        streak: 39
      },
      {
        login: 'alastairparagas',
        streak: 89
      },
      {
        login: 'darkfader',
        streak: 2
      }
    ];
    var sorted_streak = streaks.sort(function (a, b) {
      console.log(sorted_streak);
      if (a.streak < b.streak) {
        return 1;
      }
      if (a.streak > b.streak) {
        return -1;
      }
      return 0;
    });
    const commits = [
      {
        login: 'kennetpostigo',
        streak: 5
      },
      {
        login: 'jalvarado91',
        streak: 23
      },
      {
        login: 'ash_daddy',
        streak: 29
      },
      {
        login: 'alastairparagas',
        streak: 80
      },
      {
        login: 'darkfader',
        streak: 5
      }
    ];
    commits.sort(function (a, b) {
      if (a.streak < b.streak) {
        return 1;
      }
      if (a.streak > b.streak) {
        return -1;
      }
      return 0;
    });
    const contributions = [
      {
        login: 'kennetpostigo',
        streak: 9
      },
      {
        login: 'jalvarado91',
        streak: 12
      },
      {
        login: 'ash_daddy',
        streak: 7
      },
      {
        login: 'alastairparagas',
        streak: 2
      },
      {
        login: 'darkfader',
        streak: 50
      }
    ];
    contributions.sort(function (a, b) {
      if (a.streak < b.streak) {
        return 1;
      }
      if (a.streak > b.streak) {
        return -1;
      }
      return 0;
    });

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
    ];

    var streakLead = sorted_streak.map((person, key) => {
      return <div className="leaderboardItem" key={key}>
        <span className="position">{key + 1}</span>
        {/*<img src={person.avatar_url}/>*/}
        <a href="#" onClick={(event) => this.onUserClick(event, person.login)} className="user">{person.login}</a>
        <div className="count">
          {person.streak}
        </div>
      </div>
    });

    var commitsLead = commits.map((person, key) => {
      return <div className="leaderboardItem" key={key}>
        <span className="position">{key + 1}</span>
        {/*<img src={person.avatar_url}/>*/}
        <a href="#" onClick={(event) => this.onUserClick(event, person.login)} className="user">{person.login}</a>
        <div className="count">
          {person.streak}
        </div>
      </div>
    });

    var contribsLead = contributions.map((person, key) => {
      return <div className="leaderboardItem" key={key}>
        <span className="position">{key + 1}</span>
        {/*<img src={person.avatar_url}/>*/}
        <a href="#" onClick={(event) => this.onUserClick(event, person.login)} className="user">{person.login}</a>
        <div className="count">
          {person.streak}
        </div>
      </div>
    });

    var leaders;
    switch (this.props.boardTitle) {
      case "Streak":
        leaders = streakLead;
        break;
      case "Commits":
        leaders = commitsLead;
        break;
      case "Contributions":
        leaders = contribsLead;
        break;
      default:
        leaders = board.map((person, key) => {
          return (
            <li key={key}>
              <p>{person.user}</p>
              <p>{person.type}</p>
            </li>
          );
        });
    }

    return (
      <div className="LeaderboardCategory">
        <h3 className={this.props.border}>{this.props.boardTitle}</h3>
        <div>
          {leaders}
        </div>
      </div>
    );

  }
}
