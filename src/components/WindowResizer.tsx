import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { uiActions } from '../store/slices/uiSlice';

interface propsType {
  setShowSideBar:React.Dispatch<React.SetStateAction<Boolean>>;
}

const WindowResizer:React.FC<propsType> = ({setShowSideBar}) => {

  const dispatch=useAppDispatch();
  const showSideBarMenuValue=useAppSelector(state=>state.ui.showSideBarMenu);

  useEffect(()=>{
    const resizeWindow=()=>{
      window.innerWidth>640? setShowSideBar(true):setShowSideBar(false);
      window.innerWidth>640 && showSideBarMenuValue && dispatch(uiActions.closeSideBarMenu());
    }   
    window.addEventListener('resize',resizeWindow);
    return ()=>{
      window.removeEventListener('resize',resizeWindow);
    }
  },[dispatch,showSideBarMenuValue,setShowSideBar])

  return (
    <div>
      
    </div>
  )
}

export default WindowResizer
