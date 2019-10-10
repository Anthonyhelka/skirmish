import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Button } from 'semantic-ui-react';

class TeamTile extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <span>{this.props.name}</span>&nbsp;&nbsp;
        <Button onClick={event => this.props.handleDelete(event, this.props.id)}>Delete</Button>
      </div>
    );
  }
}

export default TeamTile;
