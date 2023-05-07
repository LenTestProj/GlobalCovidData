import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import WindowResizer from '../WindowResizer';
import MainContactPage from './MainContactPage'

const Contacts:React.FC<{}> = () => {
  const [showSideBar,setShowSideBar]=useState<Boolean>(window.innerWidth>640?true:false);
  

  return (
    <div className={`flex h-[95vh] w-full border-2`} >
      {showSideBar && <Sidebar/>}
      <MainContactPage />
      <WindowResizer setShowSideBar={setShowSideBar} />   {/* windows reszier needed to disable the sidebar component for mobile screens*/}
    </div>
  )
}

export default Contacts
