import React, { useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import * as parkData from "./demo.json";
import openMap from "./openMap";
import "leaflet/dist/leaflet.css";
import Navbar from "../navbar/navbar";
import { Icon } from "leaflet";
import pin from "../img/pin.png";

export default function LMap() {
  const [center, setCenter] = useState({ lat: 12.865653, lng: 77.566395 });
  const [campLoc, setcampLoc] = useState([
    { lat: 12.864774, lng: 77.563499 },
    { lat: 20.160387, lng: 84.372575 },
  ]);
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();

  return (
    <div>
      <Navbar />
      <button>Click me to share location</button>
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
