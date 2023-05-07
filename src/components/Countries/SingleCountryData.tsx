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
    updated:number
  }

type propsType = {
    selectedCountryData:countryCovidDataType
}

const SingleCountryData:React.FC<propsType> = ({selectedCountryData}) => {
  return (
    <div className='flex flex-col'>
      <div className='p-2 text-[140%] flex justify-center font-bold'>
        Covid data report of {selectedCountryData.country}
      </div>
      <div className='flex flex-col md:flex-row p-2 border-2 border-purple-800 rounded-md mb-4 justify-between'>
        <div className='w-full md:w-[50%] md:border-r-4'>
        {Object.entries<any>(selectedCountryData).filter(([key,value],i,array)=>(key!=='countryInfo' && i<=array.length/2)).map(([key,value])=>(
          <div key={key} className='flex'>
            <div className='w-[55%]'>{key}:</div>
            <div className='w-[45%]'>{value}</div>
          </div>
      ))}
        </div>
        <div className='w-full md:w-[44%]'>
        {Object.entries<any>(selectedCountryData).filter(([key,value],i,array)=>(key!=='countryInfo' && i>array.length/2)).map(([key,value])=>(
          <div key={key} className='flex'>
            <div className='w-[55%] md:mr-3'>{key}:</div>
            <div className='w-[45%] md:pl-9 lg:pl-0'>{value}</div>
          </div>
      ))}
        </div>
      </div>
    </div>
    
  )
}

export default SingleCountryData
