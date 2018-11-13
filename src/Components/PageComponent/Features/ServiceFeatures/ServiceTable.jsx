import React, { Component } from 'react';

class EditableDescription extends Component {

  render() {
    return(
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Services</h2>
          <p>Click in table to edit/delete</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <div className="row">
              <div className="col-md-1">
                <span className="label label-info">Add Service</span>
              </div>
              <div className="col-md-1">
                <input id="id" type="text" className="form-control" placeholder="Id" />
              </div>
              <div className="col-md-2">
                <input id="serviceName" type="text" className="form-control" placeholder="Service Name" />
              </div>
              <div className="col-md-2">
                <input id="description" type="text" className="form-control" placeholder="Description" />
              </div>
              <div className="col-md-2">
                <input id="price" type="text" className="form-control" placeholder="Price" />
              </div>
              <div className="col-md-1">
                <button id="add" type="button" className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <table id="services" className="stripe" width="100%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
}
export default EditableDescription;
