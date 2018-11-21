import React, { Component } from 'react';
//this file should hold? and show all the posts basically

const axios = require('axios');

class ShowPost extends Component {

  constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }

  render(){
    return (
      <React.Fragment>
          <div className="list-group">
            <a href="#" className="list-group-item active">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
          </div>
      </React.Fragment>
    )
  }
}

export default ShowPost;
