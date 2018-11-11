import React, { Component } from 'react';

class ContactForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      textValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert('Thank you ' + this.state.nameValue);
    this.setState({
      nameValue: '',
      textValue: ''
    });
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Name: </label>
        </div>
        <div>
          <input className="form-control" name="nameValue" type="text" value={this.state.nameValue} onChange={this.handleChange} />
        </div>
        <br />
        <div>
        <label> Enquiry: </label>
        </div>
        <div>
        <textarea className="form-control" rows="4" cols="50" name="textValue" value={this.state.textValue} onChange={this.handleChange} />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
