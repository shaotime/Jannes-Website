import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class ServiceTable extends Component {

  constructor(props){
    super(props);
    var customData = require('./DummyItems.json');
    this.state={
      data: customData
    };
  }

  render() {
    const {data} = this.state;
    return(
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "ID",
              accessor: "id"
            },
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: 'Description',
              accessor: "description"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
export default ServiceTable;
