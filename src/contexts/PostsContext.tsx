import { createContext, ReactNode, useEffect, useState } from "react";
import { githubAPI } from "../utils/api";

interface IpostContextProviderProps {
  children: ReactNode;
}

export interface IPost {
  id: number;
  username: string;
  issue_link: string;
  title: string;
  body: string;
  created_at: Date;
  comments_amount: number;
}

interface IpostContextProps {
  postsList: IPost[];
}

export const postContext = createContext({} as IpostContextProps);

export function PostContextProvider({ children }: IpostContextProviderProps) {
  const [postsList, setPostsList] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchIssues() {
      const response = await githubAPI.get("repos/allanLandin/git-blog/issues");
      let issues = response.data;

      const posts = issues.map((issue: any) => {
        return {
          id: issue.id,
          username: issue.user.login,
          issue_link: issue.html_url,
          title: issue.title,
          body: issue.body,
          created_at: new Date(issue.created_at),
          comments_amount: issue.comments,
        };
      });
      setPostsList(posts);
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
