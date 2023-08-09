import React, { useContext } from 'react';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from 'react-leaflet';

import IPTrackerContext from '../../contexts/ip-tracker-context';

import inconSvg from '../../images/icon-location.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: inconSvg,
  iconSize: [47, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -46],
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const DisplayMap = () => {
  const trackerCtx = useContext(IPTrackerContext);

  const position = trackerCtx.location;

  return (
    <main>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100vw' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <ChangeView center={position} zoom={15} />

        
        <Marker position={position} icon={markerIcon}>
        {/* add popup info later */}
          <Popup>
            <p>Hello World</p>
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};

export default DisplayMap;
