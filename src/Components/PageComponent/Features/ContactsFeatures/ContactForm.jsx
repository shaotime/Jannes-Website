import React, { Component } from 'react';

class ContactForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameValue: 'Name',
      textValue: 'Text'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { //is this actually doing anything???
    const target = event.target;
    const value = target.name === 'nameValue' ? target.nameValue : target.textValue;
    const name = target.name;

    this.setState({[name]: value}); //what is happening here?
  }

  handleSubmit(event) {
  //alert('Thank you ' + this.state.nameValue); //this is giving undefined for some reason, figure out why
    alert('Thank you for your enquiry!');
    //clear the inputs, setState previously didn't work...fix
    event.preventDefault();
  }

  render() {//these values aren't actually changing dynamically with the this.state...fix it asap
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Name:
          <input name="nameValue" type="text" nameValue={this.state.nameValue} onChange={this.handleChange} />
        </div>
        <br />
        <div>
        Enquiry:
        <textarea rows="4" cols="50" name="textValue" textValue={this.state.textValue} onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
