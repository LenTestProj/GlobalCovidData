import React from 'react'
import { useAppDispatch } from '../store/hooks';
import { uiActions } from '../store/slices/uiSlice';

const MenuBar:React.FC<{}> = () => {
  const dispatch=useAppDispatch();

  const toggleMenuSideBar=()=>{
    dispatch(uiActions.toggleSideBarMenu())
  }

  return (
    <div className='pl-1 pt-1 sm:hidden cursor-pointer' onClick={toggleMenuSideBar}>
      <div className='w-5 h-1 bg-black my-[0.2rem]' ></div>
      <div className='w-5 h-1 bg-black'></div>
      <div className='w-5 h-1 bg-black my-[0.2rem]'></div>
    </div>
  )
}

export default MenuBar
