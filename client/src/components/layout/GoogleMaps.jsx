import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMaps = () => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const defaultCenter = {
    lat: 40.378729,
    lng: -111.731441
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCKAoH27P-xppaNgOfIzmG54JabIhhq6U4">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;