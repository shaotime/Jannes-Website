import React, { Component } from 'react';
import ServiceTable from "./Features/ServiceFeatures/ServiceTable";
import "./css/ServicePage.css";

class ServicePage extends Component {
  render() {
    return (
      <div className="Service">
        <div className="lander">
        <h1>Services</h1>
          <ServiceTable />
        </div>
      </div>
    )
  }
}
export default ServicePage;
