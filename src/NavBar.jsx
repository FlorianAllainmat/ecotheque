import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const img = 'media/logo_navbar_ecotheque.png';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="nav-bar">
        <Navbar className="navbar-div" dark expand="md">
          <NavbarBrand className="logo" href="/">
            <img src={img}/>
          </NavbarBrand>
          <NavItem tag={Link} to="/components/" className="join d-md-none d-lg-none">
              Ecotheque
          </NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem tag={Link} to="/components/Concept">
                  Concept
              </NavItem>
              <NavItem tag={Link} to="/components/Communauté">
                  Communauté 
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}