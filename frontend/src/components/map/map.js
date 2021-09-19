import React, { useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import * as parkData from "./demo.json";
import openMap from "./openMap";
import "leaflet/dist/leaflet.css";
import Navbar from "../navbar/navbar";
import { Icon } from "leaflet";
import pin from "../img/pin.png";
import { geolocated } from "react-geolocated";

function LMap(props) {
  const [center, setCenter] = useState({ lat: 12.97752, lng: 77.579153 });
  const [campLoc, setcampLoc] = useState([
    { lat: 12.976128, lng: 77.5749632 },
    { lat: 20.160387, lng: 84.372575 },
  ]);
  const [True, setTrue] = useState(false);
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();

  const handleSubmit = () => {
    const long = props.coords ? props.coords.longitude : center.lng;
    const latit = props.coords ? props.coords.latitude : center.lat;
    console.log(long, latit);
  };

  return (
    <div>
      <Navbar />
      <button onClick={handleSubmit()}>Click me to share location</button>
      <MapContainer
        className="leaflet-container"
        center={[center.lat, center.lng]}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
      >
        <TileLayer
          url={openMap.maptiler.url}
          attribution={openMap.maptiler.attribution}
        />
        <Marker
          position={[campLoc[0].lat, campLoc[0].lng]}
          icon={
            new Icon({
              iconUrl: pin,
              iconSize: [35, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 10000,
})(LMap);
