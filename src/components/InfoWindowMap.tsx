import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class InfoWindowMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Marker
        key={this.props.index}
        position={{ lat: this.props.lat, lng: this.props.lng }}
        label={this.props.index.toString()}
        onClick={() => this.handleToggleOpen()}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.props.handleCloseCall}>
            <div>
              <h3>Basaweshwar Kalyan Mantap</h3>
              <div>Ideal for: Wedding, small functions</div>
              <div>more..</div>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default InfoWindowMap;
