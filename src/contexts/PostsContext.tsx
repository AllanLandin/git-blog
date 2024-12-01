import { createContext, ReactNode, useEffect, useState } from "react";
import { githubAPI } from "../utils/api";

interface IpostContextProviderProps {
  children: ReactNode;
}

interface IPost {}

interface IpostContextProps {
  postsList: IPost[];
}

const postContext = createContext({} as IpostContextProps);

export function PostContextProvider({ children }: IpostContextProviderProps) {
  const [postsList, setPostsList] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchIssues() {
      const response = await githubAPI.get("repos/allanLandin/git-blog/issues");
      const issues = response.data;

      setPostsList(issues);
    }
    fetchIssues();
  }, []);

  return (
    <postContext.Provider
      value={{
        postsList: postsList,
      }}
    >
      {children}
    </postContext.Provider>
  );
}
