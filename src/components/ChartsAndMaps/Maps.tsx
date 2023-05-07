import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { GetAllCountriesCovidData } from '../../api/AllCountriesCovidData';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './Maps.css'

type countryInfoType={
    "_id": number,
    "iso2": string,
    "iso3": string,
    "lat": number,
    "long": number,
    "flag": string,
    "country":string
    }


const Maps:React.FC<{}> = () => {
    const countryInfo:countryInfoType[]=[];

    const allCountriesCovidDataQuery=useQuery({
        queryKey:['AllCountryCovidData'],
        queryFn:GetAllCountriesCovidData,
      })
    
      if (allCountriesCovidDataQuery.isLoading) return <h1 className="text-4xl">Loading Maps...</h1>
    
      if(allCountriesCovidDataQuery.isError) return <h1 className="text-4xl">{JSON.stringify(allCountriesCovidDataQuery.error)} </h1>
    
      if(allCountriesCovidDataQuery.isSuccess){
        allCountriesCovidDataQuery.data.forEach((d:any)=>{
            countryInfo.push({...d['countryInfo'],country:d.country});
        })
      }

  return (
    <div className='border-2 border-blue-600 mt-5' >
      <div className='flex justify-center p-3 text-2xl font-bold'>Maps</div>
      <MapContainer center={[48.8566,2.3522]} zoom={5} zoomControl={false}>
      <TileLayer 
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributers'
       url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
       <MarkerClusterGroup>
        {countryInfo.map((marker,i)=><Marker position={[marker.lat,marker.long]} 
        icon={new Icon({
          iconUrl:marker.flag,
          iconSize:[24,24]  //size of the icon
        })} key={i}
        >
          <Popup>{marker.country}</Popup>
        </Marker>)}
       </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default Maps
