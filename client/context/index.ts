import { createContext, useContext, useReducer } from "react";
import { ChildrenProps } from "../../components/Layout/Layout.types";

const Store = createContext();

const reducer = () => {};

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, {});
};
