import React, { Component } from 'react';
import "./css/PortfolioPage.css";
import PictureGallery from "./Features/PortfolioFeatures/PictureGallery";
import PictureUploader from "./Features/PortfolioFeatures/PictureUploader";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="lander">
          <h1>Portfolio</h1>
          <p>Ett bildgalleri där Janne kan ladda upp bilder från tidigare uppdrag</p>
          <PictureGallery />
          <b/>
          <PictureUploader />

        </div>
      </div>
    )
  }
}
export default PortfolioPage;
