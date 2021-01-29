import {useState} from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet'
import Cycho from './Cycho';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PopupInfo from './PopupInfo';
import './CychoMap.css';

const CychoMap = ({cychos}) => {
    
    const [currentLocation, setCurrentLocation] = 
    useState({lat: 51.50692026886317, lng: -0.20728327780658687});
    const [zoom, setZoom] = useState(14);
    const markerIcon = L.icon({
        iconUrl: "./static/marker-turquoise.png",
        iconSize: [35, 42]
    });

    const cychoMarkers = cychos.map((popupInfo, index) => {
        return (
            <>
                <Marker 
                    key={index}
                    position={[popupInfo.lat, popupInfo.lng]}
                    title={popupInfo.name}
                    icon={markerIcon} >
                        <Popup className='popup'>
                            <PopupInfo
                            popupInfo={popupInfo}/>
                        </Popup>
                </Marker>
            </>
        )
    })

  return (
      <>
        <Map center={currentLocation} zoom={zoom} className="cycho-map">
            <TileLayer className="map-tile"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {cychoMarkers}
        </Map>
      </>
  );
}

export default CychoMap;