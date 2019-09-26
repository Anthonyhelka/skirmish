import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import HomeContainer from './HomeContainer';
import TestContainer from './TestContainer';

class App extends Component {
  render(){
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={HomeContainer}/>
          <Route path='/test' component={TestContainer}/>
        </Router>
      </div>
    )
  }
}

export default App;
