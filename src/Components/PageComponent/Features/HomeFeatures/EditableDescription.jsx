import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import ContentEditable from 'react-contenteditable';

class EditableDescription extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'view',
      html: "<b>Hello <i>World</i></b>",
      disabled: true
    };
    this.editStuff = this.editStuff.bind(this);
    this.saveStuff = this.saveStuff.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editStuff(){
    //TODO: save a temporary state of old html, if goBack() is called, then change html to old html instead of new one
    this.setState({
      mode: 'edit',
      disabled: false
    });

  }

  saveStuff(){
    this.setState({
      mode: 'view',
      disabled: true
    });

  }

  goBack(){
    this.setState({
      mode: 'view',
      disabled: true
    });

  }

  handleChange(evt){
     this.setState({html: evt.target.value});
  }


renderButtons() {
    if (this.state.mode === 'edit')
      return (
        <div className="buttonList">
            <button style={{margin:1}} onClick={this.saveStuff} className='defaultBtn'>Save</button>
            <button style={{margin:1}} onClick={this.goBack} className='defaultBtn'>Discard Changes</button>
        </div>
      )
    else {
      return (
         <div className="buttonList">
            <button onClick={this.editStuff} className='defaultBtn'>Edit</button>
          </div>
       )
    }
  }

  render() {
      return (
          <div>
              <div>
                  <h3>Below you can edit and save your description!</h3>
                  <ContentEditable html={this.state.html}
                                    disabled={this.state.disabled}
                                    onChange={this.handleChange}
                                    tagName='article'/>
                  {this.renderButtons()}
              </div>
          </div>
      );
  }
}

export default EditableDescription;
