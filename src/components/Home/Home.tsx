import React from 'react';
import classes from'./Home.module.css';
import { GetGlobalCovidData } from '../../api/worldWideCovidData';
import { useQuery } from '@tanstack/react-query';
import { Chart as ChartJS, BarElement,CategoryScale,LinearScale,Tooltip,Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)


const Home:React.FC<{}> = () => {
  
const options={
  responsive:true,
  maintainAspectRatio:false
}

let data={
  labels:['1','2','3'],
      datasets:[
        {
          label:'ALL Covid Data',
          data:[1,2,3],
          backgroundColor:'aqua',
          borderColor:'black',
          borderWidth:1
        }
      ]
};

  const allGlobalCovidDataQuery=useQuery({
    queryKey:['AllGlobalCovidData'],
    queryFn:GetGlobalCovidData
  });

  if(allGlobalCovidDataQuery.isLoading) return <h1 className='text-4xl'>Loading...</h1>

  if(allGlobalCovidDataQuery.isError) return <h1 className='text-4xl'>{JSON.stringify(allGlobalCovidDataQuery.error)}</h1>

  if(allGlobalCovidDataQuery.isSuccess)
  {
    const allCovidDataKeys=[];
    const allCovidDataValues=[];
    for(const key in allGlobalCovidDataQuery.data)
    {
      allCovidDataKeys.push(key);
      allCovidDataValues.push(allGlobalCovidDataQuery.data[key]);
    }
    allCovidDataKeys.shift();
    allCovidDataValues.shift();
    data={
      labels:allCovidDataKeys,
      datasets:[
        {
          label:'ALL Covid Data',
          data:allCovidDataValues,
          backgroundColor:'aqua',
          borderColor:'black',
          borderWidth:1
        }
      ]
    }

  }

  

  return (
    <div className={classes.wholePage}>
      <div className={classes.headerPage}>
        <h1 className='text-[3.2vw] w-[50vw]'>World wide data of covid cases</h1> 
      </div>
      <div className={classes.bodyPage}>  {/* fetched global covid data*/}
        {/* {allGlobalCovidDataQuery.isSuccess && <h1>{allGlobalCovidDataQuery.data}</h1>} */}
        <Bar data={data} options={options} style={{paddingLeft:'3%',height:'80vh',position:'relative'}}>

        </Bar>
      </div>
    </div>
  )
}

export default Home
