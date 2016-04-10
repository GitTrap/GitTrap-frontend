import './styles/DashFeed.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import shell from 'shell';

export default class DashFeed extends Component {
  constructor(props) {
    super(props);
    this.onUserClick = this.onUserClick.bind(this);
    this.onRepoClick = this.onRepoClick.bind(this);
    this.onCommitClick = this.onCommitClick.bind(this);
  }

  onUserClick(event, login) {
    event.preventDefault();
    shell.openExternal(`http://github.com/${login}`);
  }
  onRepoClick(event, repo) {
    event.preventDefault();
    shell.openExternal(`http://github.com/${repo.name}`);
  }
  onCommitClick(event, login, repo) {
    event.preventDefault();
    let url = `https://github.com/${login}/${repo.name}/${repo.commits[0].sha}`;
    shell.openExternal(url);
  }

  renderPushEvent(item, key) {
    const { actor, repo, payload } = item;

    return (
      <div className="update-item push-event" key={key}>
        <div className="update">
          <a href="#" onClick={(e) => this.onUserClick(e, actor.login)}>{actor.login} </a>
          pushed to <a href="#" onClick={(e) => this.onRepoClick(e, repo)}>{repo.name}</a>
        </div>
        <div className="meta">
          <img style={{width: '40px', height: '40px'}} src={actor.avatar_url} />
          {/*<div className="info">
              <a href="#" onClick={(e) => this.onCommitClick(e, login, repo)}>{repo.commits[0].sha.slice(0, 7)}</a>
              {repo.commits[0].message}
          </div>*/}
        </div>
      </div>
    );
  }

  renderPullRequestEvent(item, key) {
    const {repo, actor, payload} = item;
    return <div className="update-item push-event" key={key}>
      <div className="update">
        <a href="#" onClick={(e) => this.onUserClick(e, actor.login)}>{actor.login} </a>
         sent a pull request to <a href="#" onClick={(e) => this.onRepoClick(e, repo)}>{repo.name}</a>
      </div>
    </div>
  }

  renderWatchEvent(item, key) {
    const {repo, actor, payload} = item;
    return <div className="update-item push-event" key={key}>
      <div className="update">
        <a href="#" onClick={(e) => this.onUserClick(e, actor.login)}>{actor.login} </a>
         starred <a href="#" onClick={(e) => this.onRepoClick(e, repo)}>{repo.name}</a>
      </div>
    </div>
  }

  renderForkEvent(item, key) {
    const {repo, actor, payload} = item;
    return <div className="update-item push-event" key={key}>
      <div className="update">
        <a href="#" onClick={(e) => this.onUserClick(e, actor.login)}>{actor.login} </a>
         forked <a href="#" onClick={(e) => this.onRepoClick(e, repo)}>{repo.name}</a>
      </div>
    </div>
  }

  pullRequestReviewComment(item, key) {
    const {repo, actor, payload} = item;
    return <div className="update-item push-event" key={key}>
      <div className="update">
        <a href="#" onClick={(e) => this.onUserClick(e, actor.login)}>{actor.login} </a>
         commented on a request at <a href="#" onClick={(e) => this.onRepoClick(e, repo)}>{repo.name}</a>
      </div>
    </div>
  }

  issueCommentEvent(item, key) {
    const {repo, actor, payload} = item;
    return <div className="update-item push-event" key={key}>
      <div className="update">
        <a href="#" onClick={(e) => this.onUserClick(e, actor.login)}>{actor.login} </a>
         commented on an issue at <a href="#" onClick={(e) => this.onRepoClick(e, repo)}>{repo.name}</a>
      </div>
    </div>
  }

  render () {

    var data = [
      'shit'
    ];

    var feedsData = this.props.leaderboardsData;
    var feed = feedsData.map((item, key) => {
      switch (item.type) {
        case "PushEvent":
          return this.renderPushEvent(item, key);
        case "PullRequestEvent":
          return this.renderPullRequestEvent(item, key);
        case "WatchEvent":
          return this.renderWatchEvent(item, key);
        case "ForkEvent":
          return this.renderForkEvent(item, key);
        case "PullRequestReviewCommentEvent":
          return this.pullRequestReviewComment(item, key);
        case "IssueCommentEvent":
          return this.issueCommentEvent(item, key);
        default:
          return <div></div>;
      }
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
