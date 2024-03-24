'use client'
import Image from 'next/image'
import { Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import Link from 'next/link'
import { historic_sites } from './historic_sites'
import { useState } from 'react'
import Bars from '@/components/bars'

export default function Search() {
  const [openedSite, setOpenedSite] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-9 h-screen bg-[#DDD0C8]">
      <aside className="col-span-1 p-4">
        <Link href={'/'}>
          <Image width={100} height={100} className="" alt="Charlotteville" src="/images/image 4.png" />
        </Link>
      </aside>

      <div className={`${openedSite === null ? 'col-span-8' : 'col-span-6 pl-0'} px-10 transition-all ease-in-out`}>
        <div className="flex items-center justify-center h-28 gap-4">
          <Bars />
          <h1 className="text-5xl font-normal bg-black text-white p-4 rounded-lg">Search</h1>
          <Bars />
        </div>

        <div className="h-[80vh] rounded-xl overflow-hidden">
          <Map
            defaultZoom={15}
            defaultCenter={{ lat: historic_sites[0].Latitude, lng: historic_sites[0].Longitude }}
            mapId={process.env.NEXT_PUBLIC_API_GOOGLE_MAP_ID}
            onClick={() => setOpenedSite(null)}
          >
            {historic_sites.map(({ Name, Address, Longitude, Latitude }, index) => (
              <div key={Name}>
                <AdvancedMarker position={{ lat: Latitude, lng: Longitude }} onClick={() => setOpenedSite(index)}>
                  <Pin />
                </AdvancedMarker>

                {openedSite === index && (
                  <InfoWindow position={{ lat: Latitude, lng: Longitude }} onCloseClick={() => setOpenedSite(null)}>
                    {Name}
                  </InfoWindow>
                )}
              </div>
            ))}
          </Map>
        </div>
      </div>

      {openedSite !== null && (
        <div className="col-span-2 h-full p-10 pl-0 transition-all ease-in-out">
          <div className="bg-[#0D0B09] h-full w-full rounded-2xl text-white p-3">
            <h1 className="text-3xl font-bold mb-3">{historic_sites[openedSite].Name}</h1>
            <h2 className="">{historic_sites[openedSite].Address}</h2>
          </div>
        </div>
      )}
    </div>
  )
}
