'use client'
import Image from 'next/image'
import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import Link from 'next/link'

export default function Search() {
  const historic_sites = [
    {
      Name: 'Albemarle Charlottesville Historical Society',
      Address: '200 Second Street NE Charlottesville, Virginia 22902',
      Latitude: 38.0318175,
      Longitude: -78.4799451,
    },
    {
      Name: 'Albemarle County Courthouse',
      Address: '501 East Jefferson Street Charlottesville, Virginia 22902',
      Latitude: 38.0316532,
      Longitude: -78.4774588,
    },
    {
      Name: 'Albert and Shirley Small Special Collections Library',
      Address: '170 McCormick Road Charlottesville, Virginia 22904',
      Latitude: 38.0360834,
      Longitude: -78.50588309999999,
    },
    {
      Name: 'BF Yancey Community Center',
      Address: '7625 Porters Rd Esmont, Virginia 22937',
      Latitude: 37.8213651,
      Longitude: -78.5959768,
    },
    {
      Name: 'Buck Mountain Church',
      Address: '4133 Earlysville Rd Earlysville, Virginia 22936',
      Latitude: 38.1541279,
      Longitude: -78.4803476,
    },
    {
      Name: 'Christ Episcopal Church Glendower',
      Address: '900 Glendower Road Scottsville, Virginia 24590',
      Latitude: 37.8533265,
      Longitude: -78.5342072,
    },
    {
      Name: 'City of Charlottesville Parks and Rec',
      Address: '501 E Main Street Charlottesville, Virginia 22902',
      Latitude: 38.0299649,
      Longitude: -78.4783412,
    },
    {
      Name: 'Cove Presbyterian Church',
      Address: '5531 Covesville Ln Covesville, Virginia 22931',
      Latitude: 37.8847738,
      Longitude: -78.710906,
    },
    {
      Name: 'Edgar Allan Poe\u2019s Room',
      Address: 'West Range #13, UVA Campus Charlottesville, Virginia 22902',
      Latitude: 38.0352392,
      Longitude: -78.5053967,
    },
    {
      Name: 'Emmanuel Episcopal Church',
      Address: '7599 Rockfish Gap Turnpk Greenwood, Virginia 22943',
      Latitude: 38.0333367,
      Longitude: -78.7631839,
    },
    {
      Name: 'Grace Episcopal Church',
      Address: '5607 Gordonsville Road Keswick, Virginia 22947',
      Latitude: 38.0608994,
      Longitude: -78.3083144,
    },
    {
      Name: 'Hatton Ferry',
      Address: '10120 Hatton Ferry Road Scottsville, Virginia 24590',
      Latitude: 37.7603075,
      Longitude: -78.5065916,
    },
    {
      Name: 'Ivy Creek Natural Area and Historic River View Farm',
      Address: '1780 Earlysville Rd. Charlottesville, Virginia 22901',
      Latitude: 38.0919491,
      Longitude: -78.49246459999999,
    },
    {
      Name: 'James Madison\u2019s Montpelier',
      Address: '11350 Constitution Highway Montpelier Station, Virginia 22957',
      Latitude: 38.22836789999999,
      Longitude: -78.1768167,
    },
    {
      Name: 'James Monroe\u2019s Highland',
      Address: '2050 James Monroe Parkway Charlottesville, Virginia 22902',
      Latitude: 37.9824797,
      Longitude: -78.4555011,
    },
    {
      Name: 'Jefferson School African American Heritage Center',
      Address: '233 4th St. NW Charlottesville, Virginia 22903',
      Latitude: 38.0321483,
      Longitude: -78.4870042,
    },
    {
      Name: 'Leander McCormick Observatory',
      Address: '600 McCormick Road Charlottesville, Virginia 22904',
      Latitude: 38.0329765,
      Longitude: -78.5223966,
    },
    {
      Name: 'Lewis & Clark Exploratory Center',
      Address: 'Darden Towe Park Charlottesville, Virginia 22911',
      Latitude: 38.0429373,
      Longitude: -78.4512754,
    },
    {
      Name: 'Memorial to Enslaved Laborers at UVA',
      Address: '1620 University Avenue Charlottesville, Virginia 22903',
      Latitude: 38.0359321,
      Longitude: -78.5014249,
    },
    {
      Name: 'Michie Tavern ca. 1784',
      Address: '683 Thomas Jefferson Parkway Charlottesville, Virginia 22902',
      Latitude: 38.0087438,
      Longitude: -78.46369419999999,
    },
    {
      Name: 'Monticello',
      Address: '931 Thomas Jefferson Pkwy Charlottesville, Virginia 22902',
      Latitude: 38.0099597,
      Longitude: -78.45191,
    },
    {
      Name: 'Navigator Tours with Rick Britton',
      Address: '3144 Ridgefield Road Charlottesville, Virginia 22911',
      Latitude: 38.1221799,
      Longitude: -78.42885249999999,
    },
    {
      Name: 'Norm\u2019s Executive Transportation',
      Address: '3402 Moubry Lane Charlottesville, Virginia 22911',
      Latitude: 38.1294707,
      Longitude: -78.4305748,
    },
    {
      Name: 'Oakleigh Veterans Memorial',
      Address: '240 Nichols Court Charlottesville, Virginia 22901',
      Latitude: 38.084957,
      Longitude: -78.4806533,
    },
    {
      Name: 'Paramount Theater',
      Address: '215 East Main Street Charlottesville, Virginia 22902',
      Latitude: 38.030847,
      Longitude: -78.4800339,
    },
    {
      Name: 'Pine Knot',
      Address: '711 Coles Rolling Road Keene, Virginia 22946',
      Latitude: 37.852916,
      Longitude: -78.521388,
    },
    {
      Name: 'Rotunda and Central Grounds',
      Address: '1717 University Ave Charlottesville, Virginia 22903',
      Latitude: 38.0365826,
      Longitude: -78.50294439999999,
    },
    {
      Name: 'Scottsville Museum',
      Address: '290 Main Street Scottsville, Virginia 24590',
      Latitude: 37.7990662,
      Longitude: -78.49323389999999,
    },
    {
      Name: 'Skirmish At Rio Hill',
      Address: 'Rio Hill Center Charlottesville, Virginia 22902',
      Latitude: 38.0875724,
      Longitude: -78.4734193,
    },
    {
      Name: 'Town of Scottsville',
      Address: '401 Valley Street Scottsville, Virginia 24590',
      Latitude: 37.7996954,
      Longitude: -78.4953723,
    },
    {
      Name: 'University Guide Service',
      Address: 'Pavilion VIII Charlottesville, Virginia 22903',
      Latitude: 38.034362,
      Longitude: -78.5035983,
    },
    {
      Name: 'University of Virginia',
      Address: 'UVA Charlottesville, Virginia 22904',
      Latitude: 38.0340277,
      Longitude: -78.510016,
    },
    {
      Name: 'Unlocked History Escape Rooms',
      Address: '1717 Allied Ln, Suite 1B Charlottesville, Virginia 22903',
      Latitude: 38.0410892,
      Longitude: -78.4781914,
    },
    {
      Name: 'Virginia Discovery Museum',
      Address: '524 East Main Street Charlottesville, Virginia 22902',
      Latitude: 38.0293255,
      Longitude: -78.47805819999999,
    },
  ]

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
        <div className="h-[500px] mr-48 ml-48 mt-18 mb-10 rounded-xl overflow-hidden">
          <Map
            defaultZoom={15}
            defaultCenter={{ lat: historic_sites[0].Latitude, lng: historic_sites[0].Longitude }}
            mapId={process.env.NEXT_PUBLIC_API_GOOGLE_MAP_ID}
          >
            {historic_sites.map(({ Longitude, Latitude }) => (
              <AdvancedMarker position={{ lat: Latitude, lng: Longitude }}>
                <Pin />
              </AdvancedMarker>
            ))}
          </Map>
        </div>
      </div>
    </div>
  )
}
