import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Popup from "reactjs-popup";
import "./Modal.css";

class ServiceTable extends Component {

  constructor(props){
    super(props);
    var customData = require('./DummyItems.json');
    this.state={
      data: customData
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) { //currently not using this much directly, wanted to make an "Edit Row" or "Edit Table" button/function
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{ //sanitized? watch out for XSS attacks!!
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  deleteRow(id){
    const index = this.state.data.findIndex(data => {
      return data.id === id
    })
    this.state.data.splice(index, 1);
    this.setState({data: this.state.data});
  }

  render() {
    const {data} = this.state;
    return(
      <React.Fragment>
      <div>

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
                        <input id="id" type="text" className="form-control" placeholder="ID" required />
                      </div>
                      <div className="col-md-3">
                        <input id="serviceName" type="text" className="form-control" placeholder="Service Name" required />
                      </div>
                      <div className="col-md-5">
                        <input id="description" type="text" className="form-control" placeholder="Description" required />
                      </div>
                      <div className="col-md-2">
                        <input id="price" type="text" className="form-control" placeholder="Price" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="actions">
              <Popup
                trigger={<button style={{margin:"4px"}} className="btn btn-default"> Trigger </button>}
                position="top center"
                closeOnDocumentClick
              >
                <span>
                  TODO: Add this as a string to DummyItems.json object (parse needed?)
                </span>
              </Popup>
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

      </div>

      <br />
      <br />
      <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "ID",
                accessor: "id",
                filterable: true,
                minWidth: 50,
              },
              {
                Header: "Service Name",
                accessor: "name",
                minWidth: 100,
                Cell: this.renderEditable
              },
              {
                Header: 'Description',
                accessor: "description",
                minWidth: 150,
                sortable: false,
                Cell: this.renderEditable
              },
              {
                Header: 'Price',
                accessor: "price",
                minWidth: 50,
                Cell: this.renderEditable
              },
              {
                Header: 'Actions',
                minWidth: 60,
                Cell: props => (
                  <div>
                    <button className="btn btn-danger" onClick={()=>this.deleteRow(props.original.id)} > Delete </button>
                  </div>
                )
              }
            ]}
            defaultPageSize={5}
            className="-striped -highlight"

          />
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTable;
