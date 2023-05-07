import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { GetCovidDiseases } from '../../api/covidDiseases'
import { ResponsiveContainer,CartesianGrid,LineChart,Line,XAxis,YAxis,Legend, Tooltip } from 'recharts'
  
type covidCasesType={
  name:string,
  cases:(number|unknown)
}

type covidDeathsType={
  name:string,
  deaths:(number|unknown)
}

type covidRecoveredType={
  name:string,
  recovered:(number|unknown)
}

type covidMainTypeElementsType={
  name:string,
  color:string,
  title:string,
  arrayVal:(covidCasesType[]|covidDeathsType[]|covidRecoveredType[]|null)
}

const covidMainTypeElements:covidMainTypeElementsType[]=[
 {
  name:'cases',
  color:'#ff0000',
  title:'Covid Cases',
  arrayVal:null
 },
 {
  name:'deaths',
  color:'#190033',
  title:'Covid Deaths',
  arrayVal:null
 },
 {
  name:'recovered',
  color:'#009900',
  title:'Covid Recovered Cases',
  arrayVal:null
 }
]

const Charts:React.FC<{}> = () => {
   
  let covidCases:covidCasesType[]=[];
  let covidDeaths:covidDeathsType[]=[];
  let covidRecoveredCases:covidRecoveredType[]=[];

  const covidDiseasesQuery=useQuery({
    queryKey:['covidDiseases'],
    queryFn:GetCovidDiseases
  }) 

  if (covidDiseasesQuery.isLoading) return <h1 className="text-4xl">Loading Charts...</h1>
    
  if(covidDiseasesQuery.isError) return <h1 className="text-4xl">{JSON.stringify(covidDiseasesQuery.error)} </h1>
   
  if(covidDiseasesQuery.isSuccess){
       //fetching the covid cases data
       covidCases=Object.entries(covidDiseasesQuery.data.cases).map(([key,value],i)=>{
       return {
        key:i,
        name:key,
        cases:value,
       }
       });

       //fetching the covid deaths data
       covidDeaths=Object.entries(covidDiseasesQuery.data.deaths).map(([key,value],i)=>{
        return {
          name:key,
          deaths:value
        }
       });

       //fetching the covid recovered cases data
       covidRecoveredCases=Object.entries<any>(covidDiseasesQuery.data.recovered).map(([key,value],i)=>{
        return {
          name:key,
          recovered:value
        }
       })
       covidMainTypeElements[0].arrayVal=covidCases;
       covidMainTypeElements[1].arrayVal=covidDeaths;
       covidMainTypeElements[2].arrayVal=covidRecoveredCases

  }
  
 
  return (
    <div className='w-full  border-2 border-green-700 flex flex-col'>
      <div className='flex justify-center p-3 text-2xl font-bold'>Charts</div>
      {covidMainTypeElements.map((val,i)=>
      (<div><ResponsiveContainer width='100%' aspect={2.6} key={i}>
        <LineChart data={val.arrayVal??[]} margin={{top:40,left:60,right:30,bottom:5}}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Line type='basisOpen' dataKey={val.name} stroke={val.color} name={val.title} activeDot={{r:6}}/>
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer></div>))}
    </div>
  )
}

export default Charts
