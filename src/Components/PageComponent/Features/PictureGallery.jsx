import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Pic1 from './RandomPictures/pic1.png';
import Pic2 from './RandomPictures/pic2.png';
import Pic3 from './RandomPictures/pic3.png';
import Pic4 from './RandomPictures/pic4.png';

class PictureGallery extends Component {
  render() {
    const images = [
      {
        original: Pic1,
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: Pic2,
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: Pic3,
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: Pic4,
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default PictureGallery;
