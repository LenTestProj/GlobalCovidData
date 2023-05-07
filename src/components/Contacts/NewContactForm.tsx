import React, { useState } from 'react'
import Sidebar from '../Sidebar';
import WindowResizer from '../WindowResizer';
import AddNewContact from './AddNewContactFolder/AddNewContact';
import ContactList from './MenuSideBar/ContactList/ContactList';
import MenuSideBar from './MenuSideBar/MenuSideBar';

const NewContactForm = () => {
  const [showNewContactForm,setShowAddNewContactForm]=useState<Boolean>(false);
  const [showSideBar,setShowSideBar1]=useState<Boolean>(window.innerWidth>640?true:false);
  const [isEditButtonClicked,setIsEditButtonClicked]=useState<Boolean>(false);
  const [editItemId,setEditItemId]=useState<number>();

  return (
    <div className='flex h-[95vh] w-full border-2'>
      {showSideBar && <Sidebar/>}
      <div className='flex  flex-col items-center w-full sm:w-[85%] pt-2 sm:ml-[15%]'>
      {!showNewContactForm && <button onClick={()=>setShowAddNewContactForm(true)}className='bg-blue-500 text-white font-bold py-2 px-4 rounded '>Add New Contact</button>}
      {showNewContactForm && <AddNewContact onCancelContactForm={setShowAddNewContactForm} isEditButtonClicked={isEditButtonClicked} setIsEditButtonClicked={setIsEditButtonClicked} editItemId={editItemId} setEditItemId={setEditItemId}/>}
      <ContactList setIsEditButtonClicked={setIsEditButtonClicked} setEditItemId={setEditItemId}/>
      </div>
      <MenuSideBar />

      <WindowResizer setShowSideBar={setShowSideBar1} />
    </div>
  )
}

export default NewContactForm
