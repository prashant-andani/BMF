import React from "react";
import ReactDOM from "react-dom";
import InfoWindowMap from "./InfoWindowMap";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const Kalaburagi_LatLong = {
  lat: 17.3297,
  lng: 76.8343
};
const MapView = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoq0m9jXbVANYz0JaviNdUX8rqxWbJSA0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={15} defaultCenter={Kalaburagi_LatLong}>
    {props.isMarkerShown && (
      <InfoWindowMap
        lat={Kalaburagi_LatLong.lat}
        lng={Kalaburagi_LatLong.lng}
        index={1}
      />
    )}
  </GoogleMap>
));
export default MapView;
