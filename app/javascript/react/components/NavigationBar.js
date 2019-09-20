import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Menu, Dropdown, Image, Segment, Search } from 'semantic-ui-react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: null,
      home: false
    }
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
  fetch('/homes/index')
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
      this.setState({ currentUser: currentUser })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div>
        <Responsive as={Menu} fluid inverted stackable widths='1' maxWidth={500}>
          <Dropdown item text={<Image src={require('../../../../public/favicon.ico')} />}>
            <Dropdown.Menu textAlign='center'>
              <Dropdown.Item text='Home' as={ Link } to='/' active={this.state.home} />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} fluid inverted  widths='2' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/' active={this.state.home}><Image src={require('../../../../public/favicon.ico')} size='mini' /></Menu.Item>
          <Menu.Item name='login' as={ Link } to='/users/sign_in'>Login</Menu.Item>

        </Responsive>
      </div>
    )
  }
}

export default NavigationBar;
