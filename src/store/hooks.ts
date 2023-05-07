import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import type { RootState,AppDispatch } from "./store";

type dispatchFn=()=>AppDispatch;
export const useAppDispatch:dispatchFn=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;