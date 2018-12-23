import React, { Component } from 'react';
import Footer from './FooterComponent/Footer';
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
