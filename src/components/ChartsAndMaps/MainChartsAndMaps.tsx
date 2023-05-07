import React from 'react'
import MenuSideBar from '../Contacts/MenuSideBar/MenuSideBar';
import Charts from './Charts';
import Maps from './Maps';



const MainChartsAndMaps:React.FC<{}> = () => {
        
   return (
    <>
      <MenuSideBar />
      <div className='w-full sm:w-[85%] border-2 border-purple-900 flex flex-col sm:ml-[15%] justify-end'>
        <Charts />
        <Maps />
      </div>
    </>
  )
}

export default MainChartsAndMaps
