import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class HomeContainer extends Component {
  constructor(props) {
  super(props);
  this.state={}
  this.handleClick = this.handleClick.bind(this);
}
  handleClick() {
    browserHistory.push(`/test`);
  }
  render(){
    return (
      <div>
        hello from home

        <p onClick={this.handleClick}>test</p>
      </div>
    )
  }
}

export default HomeContainer;
