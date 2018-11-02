import React, { Component } from 'react';
import "./css/PortfolioPage.css";
import PictureGallery from "./Features/PictureGallery";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="lander">
          <h1>Portfolio</h1>
          <p>Ett bildgalleri där Janne kan ladda upp bilder från tidigare uppdrag</p>
          <PictureGallery />
        </div>
      </div>
    )
  }
}
export default PortfolioPage;
