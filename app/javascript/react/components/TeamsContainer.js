import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Button } from 'semantic-ui-react';

import TeamTile from './TeamTile.js';

class TeamsContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      teams: []
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event, teamID) {
    event.preventDefault();
    fetch("/api/v1/teams/destroy", {
      credentials: "same-origin",
      method: "DELETE",
      body: JSON.stringify(teamID),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        browserHistory.push('/teams');
        window.location.reload();
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
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
        <TeamTile
         key={team.id}
         id={team.id}
         name={team.name}
         handleDelete={this.handleDelete}
        />
      );
    })

    return (
      <div>
        <Button as={ Link } to={'/teams/create_team'} >Create Team</Button>
        <p>You currently have {this.state.teams.length} teams!</p>
        {teams}
      </div>
    );
  }
}

export default TeamsContainer;
