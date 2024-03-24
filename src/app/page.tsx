'use client'

import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

export default function Home() {
  const cords = { lat: 38.0831, lng: -78.4344 }

  return (
    <main className="">
      <div className="w-screen h-screen">
        <Map defaultZoom={15} defaultCenter={cords} mapId={process.env.NEXT_PUBLIC_API_GOOGLE_MAP_ID}>
          <AdvancedMarker position={cords}>
            <Pin />
          </AdvancedMarker>
        </Map>
      </div>
    </main>
  )
}
