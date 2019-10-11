import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import HomeContainer from './HomeContainer';
import TeamsContainer from './TeamsContainer';
import CreateTeamContainer from './CreateTeamContainer';

class App extends Component {
  render(){
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={HomeContainer}/>
          <Route path='/teams' component={TeamsContainer}/>
          <Route path='/teams/create_team' component={CreateTeamContainer}/>
        </Router>
      </div>
    )
  }
}

export default App;
