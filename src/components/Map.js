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
            <a href='https://www.google.com/maps/place/PT.+Patrinda+Mitra+Abadi/@-7.6927273,109.03433,17.71z/data=!4m12!1m6!3m5!1s0x0:0xfeb12f705b9c30c6!2sPT.+Patrinda+Mitra+Abadi!8m2!3d-7.6917984!4d109.034453!3m4!1s0x0:0xfeb12f705b9c30c6!8m2!3d-7.6917984!4d109.034453'>
            PT. Patrinda Mitra Abadi
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}