import React, { Component } from 'react';
import Popup from "reactjs-popup";
import "./Modal.css";
const axios = require('axios');

class AddService extends Component {
  constructor(props){
    super(props);
    this.state={
      id: "",
      name: "",
      description: "",
      price: ""
    };
    this.addService = this.addService.bind(this);
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleIDChange(e){
    this.setState({id:e.target.value});
  }

  handleNameChange(e){
    this.setState({name:e.target.value});
  }

  handleDescriptionChange(e){
    this.setState({description:e.target.value});
  }

  handlePriceChange(e){
    this.setState({price:e.target.value});
  }

  addService(){
    axios.post('/addService', {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    })
    .then( (response) => {
      console.log('response from add service is ',response);
    })
    .catch( (error) => {
      console.log(error);
    });
    window.location.reload();
  }

render(){
  return(
    <React.Fragment>
    <Popup trigger={<button className="btn btn-default pull-right"> Add New Item</button>} modal>

        {close => (
      <div className="moodal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Add New Item </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-2">
                    <input id="id" type="text" onChange={this.handleIDChange} className="form-control" placeholder="ID" required />
                  </div>
                  <div className="col-md-3">
                    <input id="serviceName" type="text" onChange={this.handleNameChange} className="form-control" placeholder="Service Name" required />
                  </div>
                  <div className="col-md-5">
                    <input id="description" type="text" onChange={this.handleDescriptionChange} className="form-control" placeholder="Description" required />
                  </div>
                  <div className="col-md-2">
                    <input id="price" type="text" onChange={this.handlePriceChange} className="form-control" placeholder="Price" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <button style={{margin:"4px"}} className="btn btn-default" onClick={this.addService} > Trigger </button>
          <button
            className="btn btn-default"
            style={{margin:"4px"}}
            onClick={() => {
              console.log('modal closed ')
              close()
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    )}
    </Popup>
    </React.Fragment>
    );
  }
}

export default AddService;
