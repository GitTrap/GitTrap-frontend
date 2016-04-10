import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Challenges from './components/Challenges/Challenges';
import PendingChallenges from './components/Challenges/PendingChallenges';
import CreateChallenge from './components/Challenges/CreateChallenge';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/users" component={Users} />
    <Route path="/leaderboard" component={LeaderBoard} />
    <Route path="/challenges" component={Challenges} >
      <IndexRoute component={PendingChallenges}/>
      <Route path="createchallenge" component={CreateChallenge}/>
    </Route>
  </Route>
);
