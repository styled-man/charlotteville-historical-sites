'use client'

import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const cords = { lat: 38.0831, lng: -78.4344 }

  return (
    <div className="grid grid-cols-9 bg-[#DDD0C8]">
      <aside className="col-span-1 px-4 py-4 h-[20vh]">
        <Image width={120} height={120} alt="Charlotteville" src="/images/image 2.png" />
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
          {/* <button className="p-2 bg-black text-white right-0 bottom-0 border-r-transparent font-gorwun-batang hover:bg-white hover:text-black">
            <a href="">Search</a>
          </button> */}
        </div>

        <div>
          {/*   <Image width={1500} height={1200} alt='Charlottesville' src='/Images/longPhoto.jpg' /> */}

          {/* <img  alt='Charlottesville' src='/Images/longPhoto.jpg' className='h-full w-full '/>
        <button className='p-2 bg-black text-white absolute border-r-transparent font-gorwun-batang hover:bg-white hover:text-black'>
          <a href="">Search</a>
        </button> */}
        </div>
      </main>
    </div>
  )

  return (
    <main className="">
      <div className="w-full">
        <div>
          <Image width={120} height={120} alt="Charlotteville" src="/Images/image 2.png" />
        </div>
        <div>
          <header>
            <h1 className="text-7xl font-gorwun-batang">
              Find Historic Sites in <br></br> Charlottesville
            </h1>
          </header>
        </div>
      </div>
      <span className="mainImage w-full">
        <Image width={975} height={1080} alt="Charlottesville" src="/Images/downtownMall.jpg" />
      </span>
    </main>
  )
}
