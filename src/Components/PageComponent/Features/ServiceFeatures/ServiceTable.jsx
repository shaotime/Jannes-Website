import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Popup from "reactjs-popup";
import "./Modal.css";
import AddService from "./AddService";
const axios = require('axios');

class ServiceTable extends Component {

  constructor(props){
    super(props);
    this.state={
      data: []
    };
    this.renderEditable = this.renderEditable.bind(this);
    this.getServices = this.getServices.bind(this);
  }

  componentWillMount(){
    this.getServices();
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
    axios.delete('/deleteService/'+ this.state.data[index].id)
     .then((response)=>{
       console.log("deleted");
       this.state.data.splice(index, 1);
       this.setState({data: this.state.data});
       this.getServices();
     })
     .catch((error) => {
       console.log(error);
     });



  }

  getServices(){
    let self = this;
    axios.get('/getServices')
    .then((response) => {
      self.setState({data: response.data})
      console.log("SHOW SERVICES: " + self.state.data);
      for (var i in response.data) {
        console.log(response.data[i]);
      }
    })
    .catch((error) => {
      console.log('error is ',error);
    });
  }

  render() {
    const {data} = this.state;
    return(
      <React.Fragment>
      <div>
        <AddService />
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
                filterable: true
              //  Cell: this.renderEditable
              },
              {
                Header: 'Description',
                accessor: "description",
                minWidth: 150,
                sortable: false,
              //  Cell: this.renderEditable
              },
              {
                Header: 'Price',
                accessor: "price",
                minWidth: 50,
              //  Cell: this.renderEditable
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
