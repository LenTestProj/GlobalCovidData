import { createSlice } from '@reduxjs/toolkit'

interface uiState{
  showSideBarMenu:Boolean
}

const initialState:uiState={
  showSideBarMenu:false
}

const uiSlice=createSlice({
  name: 'ui',
  initialState,
  reducers: {
     toggleSideBarMenu:state=>{
      state.showSideBarMenu=!state.showSideBarMenu
     },
     closeSideBarMenu:state=>{
      state.showSideBarMenu=false;
     }
  }
})

export const uiActions=uiSlice.actions;
export default uiSlice;

//reducers for toggling and removing sidebar menu for mobile screens
