import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./slices/uiSlice"
import contactSlice from "./slices/contactSlice";

const store=configureStore({
  reducer:{
    ui:uiSlice.reducer,
    contact:contactSlice.reducer
  }
});


export type RootState=ReturnType<typeof store.getState>;

export type AppDispatch=typeof store.dispatch;

export default store;
