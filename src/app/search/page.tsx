'use client'
import Image from 'next/image'
import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import Link from 'next/link'

export default function Search() {
  const cords = { lat: 38.0831, lng: -78.4344 }

  return (
    <div className="grid grid-cols-9 h-screen bg-[#DDD0C8]">
      <aside className="col-span-1 px-4 py-4">
        <Link href={'/'}>
        <Image width={100} height={100} className="" alt="Charlotteville" src="/images/image 4.png" />
        </Link>
      </aside>

      <div className="col-span-8">
        <div className="flex items-center justify-center h-28 gap-4">
          <div className="flex flex-col gap-2.5 ">
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
          </div>
          <h1 className="text-5xl font-normal bg-black text-white p-4 rounded-lg">Search</h1>
          <div className="flex flex-col gap-2.5 ">
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
            <div className="h-[2px] w-96 bg-black"></div>
          </div>
        </div>
    <div className='h-[500px] mr-48 ml-48 mt-18 mb-10 rounded-xl overflow-hidden'>
        <Map defaultZoom={15} defaultCenter={cords} mapId={process.env.NEXT_PUBLIC_API_GOOGLE_MAP_ID}>
          <AdvancedMarker position={cords}>
            <Pin />
          </AdvancedMarker>
        </Map>
        </div>
      </div>
    </div>
  )
}
