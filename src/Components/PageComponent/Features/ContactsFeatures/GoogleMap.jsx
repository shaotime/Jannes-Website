import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 57.70,
      lng: 11.97
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '80%', margin: '0 auto'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:""}} //insert google api map key here
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={57.708870}
            lng={11.974560}
            text={'Jannes Kontor'} //this is where Jannes kontor should be
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
