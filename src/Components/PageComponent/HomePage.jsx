import React, { Component } from 'react';
import EditableDescription from "./Features/EditableDescription";
import "./css/HomePage.css";

class HomePage extends Component {
  render() {

    return (
      <div className="Home">
        <div className="lander">
          <h1>HomePage</h1>
            <p>This is the homepage</p>
            <div style={{textAlign: 'center'}}>
              <EditableDescription />
            </div>
            <br/>
            <div style={{textAlign: 'center'}} className="newsFeed">
              News Feed
            </div>


        </div>
      </div>
    )
  }
}
export default HomePage;
