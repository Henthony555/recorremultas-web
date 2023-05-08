import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../assets/css/MapAgencias.css";


export default function MapAgencias() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -8.110482, lng: -35.015466 }), []);

  return (
    <div className="map">
      <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}