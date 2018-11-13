import React, { Component } from 'react';
import ServiceTable from "./Features/ServiceFeatures/ServiceTable";
import "./css/ServicePage.css";

class ServicePage extends Component {
  render() {
    return (
      <div className="Service">
        <div className="lander">
          <ServiceTable />
        </div>
      </div>
    )
  }
}
export default ServicePage;
