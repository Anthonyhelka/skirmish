import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Button } from 'semantic-ui-react';

import TextField from './TextField';

class CreateTeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange(event) {
    let newData = event.target.value;
    this.setState({ [event.target.name]: newData });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    let teamPayload = {
      name: this.state.name
    };

    fetch("/api/v1/teams/create_team", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(teamPayload),
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

  render(){
    return (
      <div>
        <h2>Create A Team</h2>
        <form onSubmit={this.handleOnSubmit}>
          <TextField
            labelName="Name"
            inputName="name"
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateTeamContainer;
