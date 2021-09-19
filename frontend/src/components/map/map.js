import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import openMap from "./openMap";
import "leaflet/dist/leaflet.css";
import Navbar from "../navbar/navbar";
import { Icon } from "leaflet";
import pin from "../img/pin.png";
import { geolocated } from "react-geolocated";
import { addUserLocation, getUserLocations } from "../../helper/apiCalls";
import SecPin from "../img/pin-2.png";

function LMap(props) {
  const [center, setCenter] = useState({
    /*lat: 12.97752, lng: 77.579153*/ lat: 12.98752,
    lng: 77.589153,
  });
  var curLoc = [];
  const [campLoc, setcampLoc] = useState([
    { lat: 12.976128, lng: 77.5749632 },
    { lat: 20.160387, lng: 84.372575 },
  ]);
  const [HelpLoc, SetHelpLoc] = useState([]);
  const ZOOM_LEVEL = 13;

  useEffect(() => {
    const long = props.coords ? props.coords.longitude : 77.5742032;
    const lat = props.coords ? props.coords.latitude : 12.996928;
    curLoc.push(lat);
    curLoc.push(long);
  }, []);

  const getHelp = () => {
    getUserLocations()
      .then((data) => {
        SetHelpLoc([...HelpLoc, data]);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    addUserLocation(curLoc)
      .then((data) => {
        SetHelpLoc({ HelpLoc: data });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <button className="button" onClick={() => handleSubmit()}>
        Click me to share location
      </button>
      <button className="button" onClick={() => getHelp()}>
        Get Help
      </button>
      <MapContainer
        className="leaflet-container"
        center={[center.lat, center.lng]}
        zoom={ZOOM_LEVEL}
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
          <Popup>Rescue camp</Popup>
        </Marker>
        <Marker
          position={[12.996928, 77.5742032]}
          icon={
            new Icon({
              iconUrl: SecPin,
              iconSize: [35, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(LMap);
