import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class HomeContainer extends Component {
  constructor(props) {
  super(props);
  this.state={
    signedIn: '',
    user: ''
  }
}

  // componentDidMount() {
  //   fetch('/authentication/is_signed_in')
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status}(${response.statusText})`;
  //         let error = new Error(errorMessage);
  //         throw(error);
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(body => {
  //       this.setState({ signedIn: body.is_signed_in, user: body.user })
  //     })
  //     .catch(error => console.error(`Error in fetch: ${error.message}`));
  // }


  render(){
    return (
      <div>
        hello from home {this.state.user.username}
      </div>
    )
  }
}

export default HomeContainer;
