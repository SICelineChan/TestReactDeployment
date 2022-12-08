import "./App.css";
import React from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const mapToken =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYmR4Z3VxazAyN2kzcG55Nno2bTBtZmMifQ.tMJhZlbKAf53O4lJ82dzAA"; // Set your mapbox token here

function App() {
  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={mapToken}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}

export default App;
