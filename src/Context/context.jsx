import { createContext } from "react";

export const Context = createContext(null);

export function ContextProvider(props) {
	return <Context.Provider value={{}}>{props.children}</Context.Provider>;
}
