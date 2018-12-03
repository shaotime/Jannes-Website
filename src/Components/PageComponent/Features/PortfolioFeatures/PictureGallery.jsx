import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Image from 'react-image-resizer';
import axios from "axios";
import Pic1 from './RandomPictures/pic1.png';
import Pic2 from './RandomPictures/pic2.png';
import Pic3 from './RandomPictures/pic3.png';
import Pic4 from './RandomPictures/pic4.png';

class PictureGallery extends Component {
  constructor() {
      super();
      this.state = {
        showIndex: false,
        showBullets: true,
        infinite: true,
        showThumbnails: false,
        showFullscreenButton: true,
        showGalleryFullscreenButton: true,
        showPlayButton: true,
        showGalleryPlayButton: true,
        showNav: true,
        isRTL: false,
        slideDuration: 450,
        slideInterval: 2000,
        thumbnailPosition: 'bottom',
        showVideo: {},
      };
}



  render() {
    const images = [ //dummy pictures in here right now, TODO: connect uploader
      {
        original: Pic1
      },
      {
        original: Pic2
      },
      {
        original: Pic3
      },
      {
        original: Pic4
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default PictureGallery;
