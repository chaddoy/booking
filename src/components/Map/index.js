import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles';

class Map extends Component {
  static defaultProps = {
    center: { lat: 8.227320, lng: 124.245288 },
    zoom: 19
  };

  render() {
    return (
      <div className="bk-map-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default Map;
