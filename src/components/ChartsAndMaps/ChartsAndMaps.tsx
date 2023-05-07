import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import WindowResizer from '../WindowResizer';
import MainChartsAndMaps from './MainChartsAndMaps';


const ChartsAndMaps:React.FC<{}> = () => {
  const [showSideBar,setShowSideBar]=useState<Boolean>(window.innerWidth>640?true:false);
  

  return (
    <div className={`flex w-full border-2 `}>
     {showSideBar && <Sidebar/>}
      <MainChartsAndMaps />
      <WindowResizer setShowSideBar={setShowSideBar} />
    </div>
  )
}

export default ChartsAndMaps
