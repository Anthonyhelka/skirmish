import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      signedIn: false
    }
  }

  componentDidMount() {
    fetch('/authentication/is_signed_in')
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
        this.setState({ signedIn: body.signed_in })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    let greeting;
    if (this.state.signedIn === false) {
      greeting = 'You are not signed in!';
    } else {
      greeting = 'You are signed in!';
    }
    return (
      <div>
        <p>{greeting}</p>
      </div>
    );
  }
}

export default HomeContainer;
