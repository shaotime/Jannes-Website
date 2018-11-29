import React, { Component } from 'react';
import EditableDescription from "./Features/HomeFeatures/EditableDescription";
import NewsFeed from "./Features/HomeFeatures/NewsFeed";
import "./css/HomePage.css";

class HomePage extends Component {
  render() {

    return (
      <div className="Home">
        <div className="lander">
          <h1>HomePage</h1>
          <p>Ska innehålla en kort presentation och ett nyhetsflöde </p>
          <div style={{textAlign: 'center'}}>
            <EditableDescription />
          </div>
          <br/>
          <div style={{textAlign: 'center'}} className="newsFeed">

          </div>
        </div>
        <NewsFeed />
      </div>
    )
  }
}
export default HomePage;
