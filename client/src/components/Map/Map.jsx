import React from 'react'
import './Map.scss'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import Pin from '../Pin/Pin'

;[52.4797, -1.90269]
// New Delhi Position
// center={[28.6139, 77.2088]}

function Map({ items }) {
  return (
    <div className='map'>
      <MapContainer
        center={
          items.length === 1
            ? [items[0].latitude, items[0].longitude]
            : [52.4797, -1.90269]
        }
        zoom={7}
        scrollWheelZoom={false}
        className='map'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {items.map((item) => {
          return <Pin item={item} key={item.id} />
        })}
      </MapContainer>
    </div>
  )
}

export default Map
