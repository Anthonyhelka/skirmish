import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class TeamsContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      teams: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/teams')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ teams: body.teams })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    let teams = this.state.teams.map(team => {
      return (
        <p>{team.name}</p>
      );
    })

    return (
      <div>
        <p>hello from teams container</p>
        {teams}
      </div>
    );
  }
}

export default TeamsContainer;
