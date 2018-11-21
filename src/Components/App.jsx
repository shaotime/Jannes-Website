import React, { Component } from 'react';
import { browserHistory, } from 'react-router';
import HomePage from './PageComponent/HomePage';
import Footer from './FooterComponent/Footer';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import Header from "./HeaderComponent/Header.jsx";

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
