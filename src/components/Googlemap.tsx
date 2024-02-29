'use client';

import React, { createContext, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

interface MarkerPosition {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -1.49, // Replace with your initial latitude , 
  lng: 36.97, // Replace with your initial longitude
};

const Googlemap = () => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerPosition | null>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust the zoom level as needed
      >
        <Marker
          position={center}
          onClick={() => setSelectedMarker(center)}
        />

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <>
            <div>
              <h2 className='font-bold'>Arduino Antenna sec 2</h2>
              <br/>
              <p>Latitude: -1.49</p>
              <p>Longitude: -36.97</p>
              <p>Antenna height: 4cm</p>
              <p>Antenna obstruction: 157cm</p>
              <p>Antenna Roll: 212.68&deg;</p>
              <p>Antenna Tilt: 264.85&deg;</p>
              <p>Antenna Azimuth: 183.31&deg;</p>
            </div>
            </>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Googlemap;
