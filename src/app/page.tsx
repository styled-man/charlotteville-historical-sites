'use client'

import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-cols-9 bg-[#DDD0C8]">
      <aside className="col-span-1 px-4 py-4 h-[20vh]">
        <Image width={120} height={120} alt="Charlotteville" src="/images/image 2.png" priority />
      </aside>
      <main className="col-span-8">
        <span>
          <h1 className="text-7xl font-gorwun-batang px-3 py-3 flex-1 flex-grow-0">
            <div className="flex flex-col">
              <span>Find Historic Sites in</span>
              <span className="flex items-center gap-3 ">
                <span>Charlottesville</span>
                <div className="flex flex-col gap-2.5 ">
                  <div className="h-[2px] w-32 bg-black"></div>
                  <div className="h-[2px] w-32 bg-black"></div>
                  <div className="h-[2px] w-32 bg-black"></div>
                  <div className="h-[2px] w-32 bg-black"></div>
                  <div className="h-[2px] w-32 bg-black"></div>
                </div>
              </span>
            </div>
          </h1>
        </span>

        <div className="relative w-full h-[75.8vh]">
          <Image fill alt="Charlottesville" src="/images/longPhoto.jpg" className="object-cover" />
          <Link
            href="/search"
            className="h-20 w-40 px-4 m-2 flex text-3xl items-center justify-center absolute right-40 bottom-40 bg-white text-black font-semibold rounded border-r-5 bg-opacity-90"
          >
            Search
          </Link>
        </div>
      </main>
    </div>
  )
}
