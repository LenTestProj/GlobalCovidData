import React, { useState } from "react";
import { GetAllCountriesCovidData } from "../../api/AllCountriesCovidData";
import AllCountries from "../Countries/AllCountries";
import MenuSideBar from "./MenuSideBar/MenuSideBar";
import { useQuery } from "@tanstack/react-query";
import SingleCountryData from "../Countries/SingleCountryData";

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

let allCountryCovidDataList:countryCovidDataType[]=[];


const MainContactPage: React.FC<{}> = () => {
  const [selectedCountryId,setSelectedCountryId]=useState<number>(0);
  
  const allCountriesCovidDataQuery=useQuery({
    queryKey:['AllCountryCovidData'],
    queryFn:GetAllCountriesCovidData,

  })

  if (allCountriesCovidDataQuery.isLoading) return <h1 className="text-4xl sm:ml-[15%]">Loading...</h1>

  if(allCountriesCovidDataQuery.isError) return <h1 className="text-4xl sm:ml-[15%]">{JSON.stringify(allCountriesCovidDataQuery.error)} </h1>

  if(allCountriesCovidDataQuery.isSuccess){
    allCountryCovidDataList=allCountriesCovidDataQuery.data.map((c: any,i: number)=>({...c,id:i}));
    // setSelectedCountryData(allCountriesCovidDataQuery.data[0]);
  }

  return (
    <div className="flex w-full sm:w-[85%] border-2 sm:ml-[15%]">
      <MenuSideBar />
      <div className="w-full h-full overflow-auto flex flex-col p-1 ">
        <SingleCountryData selectedCountryData={allCountryCovidDataList[selectedCountryId]}/>
        <AllCountries countrieslist={allCountryCovidDataList} setSelectedCountryId={setSelectedCountryId}/>
      </div>
    </div>
  );
};

export default MainContactPage;
