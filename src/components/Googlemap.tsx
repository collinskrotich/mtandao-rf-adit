import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

interface MapProps {
  latitude: number;
  longitude: number;
  antennaHeight: number;
  antennaObstruction: number;
  antennaRoll: number;
  antennaTilt: number;
  antennaAzimuth: number;
}

const containerStyle = {
  width: '100%',
  height: '500px',
};

const Googlemap = ({ latitude, longitude, antennaHeight, antennaObstruction, antennaRoll, antennaTilt, antennaAzimuth }: MapProps) => {
  const [selectedMarker, setSelectedMarker] = useState<{ lat: number, lng: number } | null>(null);
  const [center, setCenter] = useState<{ lat: number, lng: number }>({ lat: latitude, lng: longitude });

  useEffect(() => {
    setCenter({ lat: latitude, lng: longitude });
  }, [latitude, longitude]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12} // Adjust the zoom level as needed
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
                <br />
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
                <p>Antenna Height: {antennaHeight} cm</p>
                <p>Antenna Obstruction: {antennaObstruction} cm</p>
                <p>Antenna Roll: {antennaRoll}&deg;</p>
                <p>Antenna Tilt: {antennaTilt}&deg;</p>
                <p>Antenna Azimuth: {antennaAzimuth}&deg;</p>
              </div>
            </>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Googlemap;
