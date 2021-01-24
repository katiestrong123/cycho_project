import {useState} from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet'
import Cycho from './Cycho';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CychoMap = ({cychos}) => {

    const [currentLocation, setCurrentLocation] = 
    useState({lat: 51.50692026886317, lng: -0.20728327780658687});
    const [zoom, setZoom] = useState(14);
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
        iconSize: [35, 35]
    });

    const cychoMarkers = cychos.map((cycho, index) => {
        return (
            <>
                <Marker 
                    key={index}
                    position={[cycho.lat, cycho.lng]}
                    title={cycho.name}
                    icon={markerIcon} >
                        <Popup className='popup'>
                            <Cycho
                            cycho={cycho}/>

                        </Popup>
                </Marker>
            </>
        )
    })

  return (
      <>
        <h4>This is the map component</h4>
        <Map center={currentLocation} zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {cychoMarkers}
        </Map>
      </>
  );
}

export default CychoMap;