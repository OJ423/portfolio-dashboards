import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function AddressMap({mapData}: {mapData:any}) {
  const position: [number, number] = [+mapData.location.coordinates.latitude, +mapData.location.coordinates.longitude]
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="w-full md:h-64 h-32 rounded-lg shadow-2xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Your home.
        </Popup>
      </Marker>
  </MapContainer>)
}