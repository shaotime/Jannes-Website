import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;
const kontor = {
  lat: 57.689880,
  lng: 11.978530
};

class GoogleMap extends Component {
  static defaultProps = {
    center: kontor,
    zoom: 16
  };

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: kontor,
      map: map,
      title: 'Jannes Kontor' //hover over to see
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '80%', margin: '0 auto'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:""}} //insert google api map key here
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            lat={57.689880}
            lng={11.978530}
            text={'Jannes Kontor'} //text of where Jannes kontor should be
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
