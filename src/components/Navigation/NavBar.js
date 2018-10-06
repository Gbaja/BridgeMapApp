import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Responsive, Container, Header } from 'semantic-ui-react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';
import Heading from '../Home/Header';

class NavBar extends Component {
  state = {
    visible: false,
    leftItems: [{ as: "a", content: "BridgeMap", key: "bridge_map" }],
    rightItems: [
      { as: "a", content: "About", key: "about" },
      { as: "a", content: "Explore", key: "explore" },
      { as: "a", content: "Contact us", key: "contact_us" },
      { as: "a", content: "Log in", key: "login" },
      { as: "a", content: "Sign up", key: "signup" }
    ]
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { leftItems, rightItems, visible } = this.state;
    return (
      <div>
        <Responsive maxWidth= {Responsive.onlyMobile.maxWidth}>
          <NavBarMobile
            leftItems={leftItems}
            rightItems={rightItems}
            visible={visible}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
          >
         <Container style={{marginTop: '5em'}} fluid>
          <Heading/>
          </Container>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems}/>
          <Container style={{ marginTop: '5em' }} fluid>
            <Heading/>
            </Container>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;