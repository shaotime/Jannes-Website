import React, { Component } from 'react';
import "./EditableInformation.css";
const axios = require('axios');

class EditableInformation extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'view',
      html: "Type your information here",
      value: "",
      disabled: true
    };
    this.editStuff = this.editStuff.bind(this);
    this.saveStuff = this.saveStuff.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getInformation = this.getInformation.bind(this);
  }

  editStuff(){
    //TODO: save a temporary state of old state.value, if goBack() is called, then change html to old html instead of new one
    this.setState({
      mode: 'edit',
      disabled: false
    });
    document.getElementById('information').style.border = '1px dashed #aaa';

  }

  componentDidMount(){
      this.getInformation();
  }

  saveStuff(){
    this.setState({
      mode: 'view',
      disabled: true
    });
    document.getElementById('information').style.border = '2px solid #aaa';

    axios.post('/addInfo', {
      value: this.state.value
    })
    .then( (response) => {
      console.log('response from add information is ',response);
    })
    .catch( (error) => {
      console.log(error);
    });
  //  window.location.reload();
  }

  goBack(){ //currently disabled until editStuff TODO is finished
    this.setState({
      mode: 'view',
      disabled: true
    });

  }

  handleChange(evt){
     this.setState({
       html: evt.target.value,
       value: evt.target.value
     });
  }

  getInformation(){
    let self = this;
    axios.get('/getInfo')
    .then((response) => {
      console.log("INFO: " + self.state.value);
      console.log("RESPONSE:", response.data[0]);
      self.setState({value:response.data[0].value});
      console.log("INFO: " + self.state.value);
    })
    .catch((error) => {
      console.log('error is ',error);
    });
  }


renderButtons() {
    if (this.state.mode === 'edit')
      return (
        <div className="buttonList">
            <button style={{margin:1}} onClick={this.saveStuff} className='btn btn-success'>Save</button>
            <button style={{margin:1, visibility: "hidden"}} onClick={this.goBack} className='btn btn-danger'>Discard Changes</button>
        </div>
      )
    else {
      return (
         <div className="buttonList">
            <button onClick={this.editStuff} className='btn btn-default'>Edit</button>
          </div>
       )
    }
  }

  render() { //possible to add sanitazion if needed for security reasons
      return (
          <div>
              <div>
                  <h3>Information:</h3>
                      <div className="editableContainer">
                        <textarea id="information" className="editable"  //textarea was previously ContentEditable, box looks weird though when too many words in it
                                          //html={this.state.html} <--part of ContextEditable component
                                          placeholder="Press the Edit button below to edit text"
                                          value={this.state.value} //part of textarea component
                                          disabled={this.state.disabled}
                                          onChange={this.handleChange}
                                          />
                      </div>
                  {this.renderButtons()}
              </div>
          </div>
      );
  }
}

export default EditableInformation;
