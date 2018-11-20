import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import ContentEditable from 'react-contenteditable';
import "./EditableDescription.css";

class EditableDescription extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'view',
      html: "Type your description here",
      value: "",
      disabled: true
    };
    this.editStuff = this.editStuff.bind(this);
    this.saveStuff = this.saveStuff.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editStuff(){
    //TODO: save a temporary state of old state.value, if goBack() is called, then change html to old html instead of new one
    this.setState({
      mode: 'edit',
      disabled: false
    });
    document.getElementById('description').style.border = '1px dashed #aaa';

  }

  saveStuff(){
    this.setState({
      mode: 'view',
      disabled: true
    });
    document.getElementById('description').style.border = '2px solid #aaa';

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
                  <h3>Below you can edit and save your description!</h3>
                      <div className="editableContainer">
                        <textarea id="description" className="editable"  //textarea was previously ContentEditable, box looks weird though when too many words in it
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

export default EditableDescription;
