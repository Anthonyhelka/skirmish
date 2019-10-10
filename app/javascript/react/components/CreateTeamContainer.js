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
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
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

    this.clearForm();
  }

  clearForm() {
    this.setState({ name: "" });
  }

  render(){
    return (
      <div>
        <div>
          <h2>Create Your Team</h2>
          <br />
          <form onSubmit={this.handleOnSubmit}>
            <TextField
              labelName="name"
              inputName="name"
              value={this.state.name}
              handleOnChange={this.handleOnChange}
            />
            <br />
            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTeamContainer;
