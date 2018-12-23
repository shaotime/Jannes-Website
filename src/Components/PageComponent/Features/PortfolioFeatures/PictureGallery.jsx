import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class PictureGallery extends Component {
  constructor() {
      super();
      this.state = {
        showIndex: false,
        showBullets: true,
        infinite: true,
        showThumbnails: false,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: true,
        isRTL: false,
        slideDuration: 450,
        slideInterval: 2000,
        thumbnailPosition: 'bottom',
        showVideo: {},
      };
}

  render() {
    const images = this.props.firebasePictures;

    return (
      <ImageGallery items={images} showFullscreenButton={false} showGalleryFullscreenButton={false} showPlayButton={true} showGalleryPlayButton={false} />
    );
  }

}

export default PictureGallery;
