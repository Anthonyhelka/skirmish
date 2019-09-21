import React, { Component } from 'react';
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
