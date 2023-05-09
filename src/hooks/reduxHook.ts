
import { TypedUseSelectorHook } from "react-redux";
import { RootDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => RootDispatch = useDispatch;