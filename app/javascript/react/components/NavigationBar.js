import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Menu, Dropdown, Image, Segment, Search } from 'semantic-ui-react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
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

        <Responsive as={Menu} fluid inverted  widths='1' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/' active={this.state.home}><Image src={require('../../../../public/favicon.ico')} size='mini' /></Menu.Item>
        </Responsive>
      </div>
    )
  }
}

export default NavigationBar;
