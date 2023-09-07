import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, State } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
