import { createContext, ReactNode } from "react";

interface postContextProviderProps {
  children: ReactNode;
}

const postContext = createContext({});

export function PostContextProvider({ children }: postContextProviderProps) {
  return <postContext.Provider value={{}}>{children}</postContext.Provider>;
}
