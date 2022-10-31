// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
// --- ---------------------------------- ---

export function Map() {
  // Berlin coordinates
  const position = [-7.6917984, 109.034453]

  // --- (6) Create a custom marker ---
  const customIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [20, 20],
    // iconAnchor: [1, 1],
    // popupAnchor: [-0, -76]
  })

  return (
    <div className='center'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            PT. Patrinda Mitra Abadi
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}