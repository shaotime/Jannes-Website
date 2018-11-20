import React, { Component } from 'react';

class AddPost extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: "",
        subject: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleSubjectChange = this.handleSubjectChange.bind(this);
    }

    handleTitleChange(e){
      this.setState({title:e.target.value});
    }

    handleSubjectChange(e){
      this.setState({subject:e.target.value});
    }

    handleSubmit(e){
      console.log(this.state.title + " and " + this.state.subject);
      e.preventDefault();

    }

    render() {
      return (
        <React.Fragment>
        <div className="header"> Add New Post </div>
        <div className="content">
          <div className="form-area">
              <form role="form" onSubmit={this.handleSubmit}>
              <br styles="clear:both" />
                <div className="form-group">
                  <input type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
                </div>

                <div className="form-group">
                  <textarea type="textarea" onChange={this.handleSubjectChange} className="form-control" id="subject" placeholder="Subject" maxLength="140" rows="7"></textarea>
                </div>

              <input type="submit" id="submit" name="submit" className="btn btn-primary pull-right" value="Add Post"/>
              </form>
          </div>
        </div>
        </React.Fragment>
      )
    }
}

export default AddPost;
