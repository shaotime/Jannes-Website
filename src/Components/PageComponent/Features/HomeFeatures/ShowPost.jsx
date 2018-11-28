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
      this.deletePost = this.deletePost.bind(this);
    }

  componentWillMount(){
    this.getPosts();
  }

  getPosts() {
    let self = this;
    axios.get('/getPost')
    .then((response) => {
      self.setState({posts:response.data})
      console.log("SHOWPOST POSTS: " + self.state.posts);
      for (var i in response.data) {
        console.log(response.data[i]);
      }
    })
    .catch((error) => {
      console.log('error is ',error);
    });
  }

  deletePost(index){
    console.log("I N D E X:");
    console.log(this.state.posts[index].id);

    axios.delete('/deletePost/'+ this.state.posts[index].id)
     .then((response)=>{
       console.log("deleted");
       this.getPosts();

     })
     .catch((error) => {
       console.log(error);
     });
  }


  render(){
    return (
      <React.Fragment>
          <div style={{display: "flex", flexDirection: "column-reverse"}} className="list-group">
          {
            this.state.posts.map((post,index) => {
              return <div key={index} className="list-group-item active">
              <h4 className="list-group-item-heading">{post.Title}</h4>
              <p className="list-group-item-text">{post.Subject}</p>
              <button onClick={this.deletePost.bind(this, index)} > Delete </button>
              </div>
            })
          }
          </div>
      </React.Fragment>
    )
  }
}

export default ShowPost;
