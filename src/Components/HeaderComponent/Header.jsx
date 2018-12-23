import React, { Component } from 'react';
import "./Header.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from "../Routes";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Router>
          <div className="App container">
            <Navbar fluid collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Jannes Inredning AB</Link>
                </Navbar.Brand>
              </Navbar.Header>
                <Nav pullRight bsStyle="pills">
                  <NavItem className="nItem" href="/">Start</NavItem>
                  <NavItem className="nItem" href="/service">Tjänster/Services</NavItem>
                  <NavItem className="nItem" href="/portfolio">Portfolio</NavItem>
                  <NavItem className="nItem" href="/contacts">Kontakt/Contact</NavItem>

                </Nav>
            </Navbar>
          <Routes />
          </div>
        </Router>
      </div>
    )
  }
}
export default Header;
