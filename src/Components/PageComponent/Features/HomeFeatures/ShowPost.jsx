import React, { Component } from 'react';
//this file should hold? and show all the posts basically

const axios = require('axios');

class ShowPost extends Component {

  constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
      this.getPosts = this.getPosts.bind(this);
      this.setState = this.setState.bind(this);
    }

  componentWillMount(){
    this.getPosts();
  }

  getPosts() {
    let kek = this;
    axios.get('/getPost')
    .then((response) => {
      kek.setState({posts:response.data})
      console.log("SHOWPOST POSTS: " + kek.state.posts);
      console.log("SHOWPOST POSTS: " + kek.state.posts);
      for (var i in response.data) {
        console.log(response.data[i]);
      }
    })
    .catch((error) => {
      console.log('error is ',error);
    })
    .then(()=> {
      console.log("SHOWPOST POSTS2: " + this.state.posts);
    });
  }

  render(){
    return (
      <React.Fragment>
        <h1> </h1>
          <div className="list-group">
          {
            this.state.posts.map(function(post,index) {
              return <a href="#" key={index} className="list-group-item active">
              <h4 className="list-group-item-heading">{post.Title}</h4>
              <p className="list-group-item-text">{post.Subject}</p>
              </a>
            })
          }
          </div>
      </React.Fragment>
    )
  }
}

export default ShowPost;
