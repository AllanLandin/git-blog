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
  postsListFiltered: IPost[];
  filterPosts: (query?: string, repo?: string) => void;
}

export const postContext = createContext({} as IpostContextProps);

export function PostContextProvider({ children }: IpostContextProviderProps) {
  const [postsList, setPostsList] = useState<IPost[]>([]);
  const [postsListFiltered, setPostsListFiltered] =
    useState<IPost[]>(postsList);

  async function fetchIssues() {
    const response = await githubAPI.get("repos/allanLandin/git-blog/issues");
    let issues = await response.data;

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

  async function filterPosts(query?: string, repo?: string) {
    if (!query && !repo) {
      setPostsListFiltered(postsList);
    } else {
      const response = await githubAPI.get(
        `search/issues?q=is:issue+${query}%20repo:${repo}`
      );
      let issues = response.data.items;

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
      setPostsListFiltered(posts);
    }
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [postsList]);

  return (
    <postContext.Provider
      value={{
        postsList: postsList,
        postsListFiltered: postsListFiltered,
        filterPosts: filterPosts,
      }}
    >
      {children}
    </postContext.Provider>
  );
}
