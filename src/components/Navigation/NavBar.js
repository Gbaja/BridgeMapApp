import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Responsive, Container, Header } from 'semantic-ui-react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';
import NavBarChildren from './NavBarChildren';

class NavBar extends Component {
  state = {
    visible: false,
    leftItems: [{ as: "a", content: "BridgeMap", key: "bridge_map" }],
    rightItems: [
      { as: "a", content: "About", key: "about" },
      { as: "a", content: "Explore", key: "explore",   },
      { as: "a", content: "Contact us", key: "contact_us",   },
      { as: "a", content: "Log in", key: "login", href: "/login"  },
      { as: "a", content: "Sign up", key: "signup", href: "/signup"  }
    ]
  };


  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { leftItems, rightItems, visible } = this.state;
    const {children} = this.props;
    return (
      <Fragment>
        <Responsive maxWidth= {Responsive.onlyMobile.maxWidth}>
          <NavBarMobile
            leftItems={leftItems}
            rightItems={rightItems}
            visible={visible}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
          >
          <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
         <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </Fragment>
    );
  }
}

export default NavBar;