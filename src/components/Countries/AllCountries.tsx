import React from 'react'

type countryCovidDataType={
  active:number,
  activePerOneMillion:number,
  cases:number,
  casesPerOneMillion:number,
  continent:string,
  country:string,
  countryInfo:Object,
  critical:number,
  criticalPerOneMillion:number,
  deaths:number,
  deathsPerOneMillion:number, 
  oneCasePerPeople:number,
  oneDeathPerPeople:number,
  oneTestPerPeople:number,
  population:number,
  recovered:number,
  recoveredPerOneMillion:number
  tests:number,
  testsPerOneMillion:number,
  todayCases:number,
  todayDeaths:number,
  todayRecovered:number,
  updated:number,
  id?:number
}

interface propsType {
  countrieslist:countryCovidDataType[],
  setSelectedCountryId:React.Dispatch<React.SetStateAction<number>>
}

const AllCountries:React.FC<propsType> = ({countrieslist,setSelectedCountryId}) => {
  return (
    <div className='md:overflow-auto'>
      <ul className='w-full bg-purple-200/70'>
        {countrieslist.map((c,i)=>(<li key={i} className='my-2'>
          <div className='flex p-3 flex-col md:flex-row hover:bg-purple-400 hover:cursor-pointer rounded-md' onClick={()=>setSelectedCountryId(c.id?c.id:i)}>
            <div className='flex w-full md:w-[50%]'>
              <p className='w-[50%] md:w-[25%] font-bold'>Country:</p>
              <p className='w-[50%] md:w-[75%]'>{c.country}</p>
            </div>
            <div className='flex w-full md:w-[50%]'>
              <p className='w-[50%] md:w-[35%] font-bold'>Population:</p>
              <p className='w-[50%] md:w-[65%]'>{c.population}</p>
            </div>
          </div>
        </li>))}
      </ul>
    </div>
  )
}

export default AllCountries

