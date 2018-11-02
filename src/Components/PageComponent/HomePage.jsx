import React, { Component } from 'react';
import "./css/HomePage.css";
class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>HomePage</h1>
            <p>This is the homepage</p>
            <p> Description </p>
        </div>
        <div className="newsFeed">

        </div>
      </div>
    )
  }
}
export default HomePage;
