import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Menu, Dropdown, Image, Segment, Search } from 'semantic-ui-react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      home: false,
      isLoggedIn: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    switch(this.props.page) {
      case 'home':
        this.setState({ home: true })
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    fetch('/api/v1')
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
        this.setState({ isLoggedIn: body.signed_in })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClick(event, url) {
    window.location.href = url
  }

  render() {
    return (
      <div>
        <Responsive as={Menu} fluid inverted  widths='2' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/' active={this.state.home}><Image src={require('../../../../public/favicon.ico')} size='mini' /></Menu.Item>
          {this.state.isLoggedIn ?
            (
              <Menu.Item name='logout' onClick={event => this.handleClick(event, '/users/sign_out')}>Logout</Menu.Item>
            ) : (
              <Menu.Item name='login' onClick={event => this.handleClick(event, '/users/sign_in')}>Login</Menu.Item>
            )
          }
        </Responsive>
      </div>
    )
  }
}

export default NavigationBar;
