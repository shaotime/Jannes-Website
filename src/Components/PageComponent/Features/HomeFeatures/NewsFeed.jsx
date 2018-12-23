import React, { Component } from 'react';
import ShowPost from "./ShowPost";
import Popup from "reactjs-popup";
import "./NewsFeedModal.css";
import AddPost from "./AddPost";

class NewsFeed extends Component {

  render(){
    return (
      <div className="container">

        <div className="header clearfix">
          <nav>
          <ul className="nav nav-pills pull-right">
          <li role="presentation"> <Popup trigger={<button className="btn btn-default"> Add New Post</button>} modal>

          {close => (
            <div className="moodal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <AddPost />
            </div>
          )}

          </Popup></li>
          </ul>
          </nav>

          <h3 className="text-muted">Latest News</h3>
        </div>

        <div className="jumbotron">
          <ShowPost />
        </div>

      </div>
    )
  }
}

export default NewsFeed;
