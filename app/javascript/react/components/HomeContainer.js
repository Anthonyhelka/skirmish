import React, { Component } from 'react';
// import ReactOnRails from 'react-on-rails';
// ReactOnRails.register({ HomeContainer });
import { Segment } from 'semantic-ui-react';

import NavigationBar from './NavigationBar';

class HomeContainer extends Component {
  render(){
    return (
      <div>
        <NavigationBar page='home' />
      </div>
    )
  }
}

export default HomeContainer;
